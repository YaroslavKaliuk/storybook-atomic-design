import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from '../../atoms/title/title';
import { GPSStatusItem } from '../../molecules';
import styles from './styles.module.scss';

export interface GPSStatusListItem {
  id: string;
  status: 'viewed' | 'shared';
  time: string;
  date: string | Date;
  avatarImage: string;
  sharedWith: string;
  userName: string;
  userEmail: string;
  userInitials: string;
}

export interface GPSStatusListProps {
  documentName: string;
  items: GPSStatusListItem[];
  classes?: Partial<
    Record<'root' | 'documentName' | 'content' | 'date' | 'items' | 'empty', string>
  >;
}

const formatDate = (date: string | Date) => {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
};

const groupByDate = (items: GPSStatusListItem[]) =>
  items.reduce((groups, item) => {
    const dateKey = formatDate(item.date);
    (groups[dateKey] ||= []).push(item);
    return groups;
  }, {} as Record<string, GPSStatusListItem[]>);

export const GPSStatusList: FC<GPSStatusListProps> = ({ items, classes = {}, documentName }) => {
  const { t } = useTranslation();
  const groupedItems = groupByDate(items);
  const sortedDates = Object.keys(groupedItems).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return (
    <div className={cn(styles.gpsStatusList, classes.root)} data-id-component="gpsStatusList">
      <Title classes={{ root: styles.gpsStatusList__title }}>{documentName}</Title>
      {sortedDates.length ? (
        sortedDates.map((date) => (
          <div key={date} className={cn(styles.gpsStatusList__content, classes.content)}>
            <div className={cn(styles.gpsStatusList__date, classes.date)}>{date}</div>
            <div className={cn(styles.gpsStatusList__items, classes.items)}>
              {groupedItems[date].map((item) => (
                <GPSStatusItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={cn(styles.gpsStatusList__empty, classes.empty)}>
          {t('plugins.gpsStatusList.empty')}
        </div>
      )}
    </div>
  );
};
