import cn from 'classnames';
import { FC } from 'react';

import { RecipientItem } from '../../molecules';
import styles from './styles.module.scss';

export interface RecipientData {
  id: string;
  email: string;
  avatarImage: string;
  userInitials: string;
}

export interface RecipientListProps {
  recipients: RecipientData[];
  classes?: Partial<Record<'root', string>>;
}

export const RecipientList: FC<RecipientListProps> = ({ recipients, classes = {} }) => (
  <div className={cn(styles.recipientList, classes.root)} data-id-component="recipientList">
    {recipients.map((recipient) => (
      <RecipientItem
        key={recipient.id}
        email={recipient.email}
        avatarImage={recipient.avatarImage}
        userInitials={recipient.userInitials}
      />
    ))}
  </div>
);
