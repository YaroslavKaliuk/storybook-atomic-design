import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '../../atoms';
import styles from './styles.module.scss';

export interface SignInContinueWithEmailFormState {
  email: string;
}

export interface SignInContinueWithEmailProps {
  classes?: Partial<Record<'root', string>>;
  onSubmit: (data: SignInContinueWithEmailFormState) => void;
}

export const SignInContinueWithEmail: FC<SignInContinueWithEmailProps> = ({
  classes = {},
  onSubmit,
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInContinueWithEmailFormState>();

  const { onChange, ...emailField } = register('email', {
    required: t('plugins.signInContinueWithEmail.invalidEmail'),
  });

  return (
    <form
      className={cn(styles.signInContinueWithEmail, classes.root)}
      data-id-component="signInContinueWithEmail"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="email"
        title={t('plugins.signInContinueWithEmail.email')}
        error={errors.email?.message}
        onChange={(value: string) => onChange({ target: { value } })}
        {...emailField}
      />
      <Button type="submit" title={t('plugins.signInContinueWithEmail.continueWithEmail')} />
    </form>
  );
};
