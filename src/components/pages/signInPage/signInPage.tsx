import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppType } from '../../../hooks';
import { UIAppType } from '../../../types';
import { BackButton, Logo, Title } from '../../atoms';
import { SignInForm } from '../../molecules';
import { Header, Main, Page } from '../../templates';
import styles from './styles.module.scss';

export interface SignInPageProps {
  appType: UIAppType;
}

export const SignInPage: FC<SignInPageProps> = ({ appType }) => {
  const { t } = useTranslation();
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <Page
      appType={currentAppType}
      data-id-component="signInPage"
      classes={{ root: styles.signInPage }}
    >
      <Header appType={currentAppType}>
        <BackButton data-column="1" />
        {(currentAppType === UIAppType.webBased || currentAppType === UIAppType.expanded) && (
          <Logo />
        )}
        <Title data-column="4">{t('plugins.signInForm.signIn')}</Title>
      </Header>
      <Main appType={currentAppType} classes={{ root: styles.signInPage__main }}>
        <SignInForm onSubmit={() => {}} />
      </Main>
    </Page>
  );
};
