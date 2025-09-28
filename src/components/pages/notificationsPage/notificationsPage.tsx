import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import { Logo, Title } from '../../atoms';
import avatarImage from '../../atoms/avatar/avatar.png';
import { NavBar } from '../../molecules';
import { NotificationList } from '../../organisms';
import { Footer, Header, Main, Page } from '../../templates';
import styles from './styles.module.scss';

export interface NotificationsPageProps {
  appType: UIAppType;
}

export const NotificationsPage: FC<NotificationsPageProps> = ({ appType }) => {
  const { t } = useTranslation();
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <Page
      appType={currentAppType}
      data-id-component="notificationsPage"
      classes={{ root: styles.notificationsPage }}
    >
      <Header appType={currentAppType}>
        {(currentAppType === UIAppType.webBased || currentAppType === UIAppType.expanded) && (
          <Logo />
        )}
        <Title data-column="4">{t('plugins.title.notifications')}</Title>
      </Header>
      <Main appType={currentAppType} classes={{ root: styles.notificationsPage__main }}>
        <NotificationList
          notifications={[
            {
              id: '1',
              fileName: 'Presentation.pptx',
              userName: 'Jennifer Johnson',
              time: '9/16/2023, 2:39:59 PM',
              avatarImage: avatarImage,
              userInitials: 'JJ',
              onFileClick: (fileUrl: string) => {},
            },
            {
              id: '2',
              fileName: 'Report.pdf',
              userName: 'Michael Smith',
              time: '9/15/2023, 10:15:30 AM',
              avatarImage: avatarImage,
              userInitials: 'MS',
              onFileClick: (fileUrl: string) => {},
            },
            {
              id: '3',
              fileName: 'Budget.xlsx',
              userName: 'Sarah Wilson',
              time: '9/14/2023, 4:22:15 PM',
              avatarImage: avatarImage,
              userInitials: 'SW',
              onFileClick: (fileUrl: string) => {},
            },
          ]}
        />
      </Main>
      <Footer appType={currentAppType}>
        <NavBar appType={currentAppType} />
      </Footer>
    </Page>
  );
};
