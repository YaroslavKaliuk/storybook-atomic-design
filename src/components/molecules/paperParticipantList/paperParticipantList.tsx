import cn from 'classnames';
import { FC } from 'react';

import { UILibraryView, UIPlacement, UISize } from '../../../types';
import { Avatar, PaperStatus, Tooltip } from '../../atoms';
import styles from './styles.module.scss';

export interface PaperParticipant {
  avatarImage: string;
  userInitials: string;
  status?: 'inactive' | 'opened' | 'downloaded' | 'shared' | 'shared_downloaded';
  userName: string;
}

export interface PaperParticipantListProps {
  classes?: Partial<Record<'root', string>>;
  participants: PaperParticipant[];
  libraryView?: UILibraryView;
}

export const PaperParticipantList: FC<PaperParticipantListProps> = ({
  classes = {},
  participants,
  libraryView = UILibraryView.grid,
}) => {
  const MAX_DISPLAYED_USERS = libraryView === UILibraryView.grid ? 4 : 8;

  const shownParticipants = participants.slice(0, MAX_DISPLAYED_USERS);
  const hiddenParticipants = participants.slice(MAX_DISPLAYED_USERS);

  return (
    <div
      className={cn(
        styles.paperParticipantList,
        styles.paperParticipantList + libraryView,
        classes.root,
      )}
      data-id-component="paperParticipantList"
    >
      {shownParticipants.map((participant, index) => (
        <Tooltip key={index} content={participant.userName}>
          <div className={styles.paperParticipantList__item}>
            <Avatar
              size={UISize.sm}
              imgSrc={participant.avatarImage}
              userInitials={participant.userInitials}
              classes={{ root: styles.paperParticipantList__avatar }}
            />
            <PaperStatus
              status={participant.status || 'inactive'}
              classes={{ root: styles.paperParticipantList__status }}
            />
          </div>
        </Tooltip>
      ))}
      {hiddenParticipants.length > 0 && (
        <Tooltip
          placement={UIPlacement.topEnd}
          content={hiddenParticipants.map((p) => p.userName).join(', ')}
        >
          <div className={styles.paperParticipantList__count}>+{hiddenParticipants.length}</div>
        </Tooltip>
      )}
    </div>
  );
};
