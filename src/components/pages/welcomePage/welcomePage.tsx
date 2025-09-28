import { FC } from 'react';

import { IconMultiGoogle, IconMultiMicrosoft } from '@frontend/ui-icons-v2';

import { useAppType } from '../../../hooks';
import { UIAppType, UIColor, UISize } from '../../../types';
import { Logo, Separator } from '../../atoms';
import { SignInButtons, SignInContinueWithEmail, SignInFooter } from '../../molecules';
import { Main, Page } from '../../templates';
import styles from './styles.module.scss';

export interface WelcomePageProps {
  appType: UIAppType;
}

export const WelcomePage: FC<WelcomePageProps> = ({ appType }) => {
  const contextAppType = useAppType();
  const currentAppType = contextAppType || appType;

  return (
    <Page
      appType={currentAppType}
      data-id-component="welcomePage"
      classes={{ root: styles.welcomePage }}
    >
      <Main appType={currentAppType} classes={{ root: styles.welcomePage__main }}>
        <Logo size={UISize.lg} />
        <SignInButtons
          buttons={[
            {
              title: 'Sign in with Google',
              iconLeft: <IconMultiGoogle />,
              color: UIColor.primary,
            },
            {
              title: 'Sign in with Microsoft',
              iconLeft: <IconMultiMicrosoft />,
              color: UIColor.primary,
            },
          ]}
        />
        <Separator />
        <SignInContinueWithEmail onSubmit={() => {}} />
        <SignInFooter />
      </Main>
    </Page>
  );
};
