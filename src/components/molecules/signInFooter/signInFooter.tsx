import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { UIColor } from '../../../types';
import { GreenTechnology, Link } from '../../atoms';
import styles from './styles.module.scss';

export interface SignInFooterProps {
  classes?: Partial<Record<'root' | 'text', string>>;
}

export const SignInFooter: FC<SignInFooterProps> = ({ classes = {} }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.signInFooter, classes.root)} data-id-component="signInFooter">
      <GreenTechnology />
      <div className={cn(styles.signInFooter__text, classes.text)}>
        {t('plugins.signInFooter.byUsingTheExtensionYouAgreeToOur')}{' '}
        <Link
          href={t('plugins.signInFooter.privacyPolicyLink')}
          color={UIColor.special}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('plugins.signInFooter.privacyPolicy')}
        </Link>{' '}
        {t('plugins.signInFooter.and')}{' '}
        <Link
          href={t('plugins.signInFooter.termsOfServiceLink')}
          color={UIColor.special}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('plugins.signInFooter.termsOfService')}
        </Link>
      </div>
    </div>
  );
};
