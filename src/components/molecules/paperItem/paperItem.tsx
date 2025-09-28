import cn from 'classnames';
import { FC, useMemo } from 'react';

import { UIColor, UILibraryView, UISize } from '../../../types';
import { formatToLocaleString } from '../../../utils/date';
import { ActionMenuButton, TokenID, Tooltip } from '../../atoms';
import { type PaperParticipant, PaperParticipantList } from '../../molecules';
import styles from './styles.module.scss';

export interface PaperItemProps {
  classes?: Partial<
    Record<
      | 'root'
      | 'top'
      | 'content'
      | 'bottom'
      | 'title'
      | 'createdDate'
      | 'ownerName'
      | 'titleTruncated',
      string
    >
  >;
  title: string;
  ownerName: string;
  createdDate: string;
  participants: PaperParticipant[];
  onClick: () => void;
  color?: Exclude<UIColor, UIColor.special>;
}

export const PaperItem: FC<PaperItemProps> = ({
  classes = {},
  title,
  ownerName,
  createdDate,
  participants,
  onClick,
  color = UIColor.primary,
}) => {
  const formattedTime = useMemo(() => formatToLocaleString(createdDate), [createdDate]);

  return (
    <div
      className={cn(styles.paperItem, styles.paperItem + color, classes.root)}
      data-id-component="paperItem"
    >
      <div className={cn(styles.paperItem__top, classes.top)}>
        <TokenID tokenId="688217c62ff48621405c7226" onClick={onClick} />
        <ActionMenuButton />
      </div>
      <div className={cn(styles.paperItem__content, classes.content)}>
        <Tooltip content={title}>
          <div className={cn(styles.paperItem__title, classes.title)}>
            <span className={cn(styles.paperItem__titleTruncated, classes.titleTruncated)}>
              {title}
            </span>
          </div>
        </Tooltip>
        <div className={cn(styles.paperItem__ownerName, classes.ownerName)}>{ownerName}</div>
        <div className={cn(styles.paperItem__createdDate, classes.createdDate)}>
          {formattedTime}
        </div>
      </div>
      <div className={cn(styles.paperItem__bottom, classes.bottom)}>
        <PaperParticipantList participants={participants} libraryView={UILibraryView.grid} />
      </div>
    </div>
  );
};
