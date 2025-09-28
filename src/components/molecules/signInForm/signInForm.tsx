import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '../../atoms';
import styles from './styles.module.scss';

export interface SignInFormState {
  email: string;
  password: string;
}

export interface SignInFormProps {
  classes?: Partial<Record<'root' | 'forgotPassword' | 'fields', string>>;
  onSubmit: (data: SignInFormState) => void;
}

export const SignInForm: FC<SignInFormProps> = ({ classes = {}, onSubmit }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormState>();

  const { onChange, ...emailField } = register('email', {
    required: t('plugins.signInForm.invalidEmail'),
  });

  const { onChange: onChangePassword, ...passwordField } = register('password', {
    required: t('plugins.signInForm.invalidPassword'),
  });

  return (
    <form
      className={cn(styles.signInForm, classes.root)}
      data-id-component="signInForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(styles.signInForm__fields, classes.fields)}>
        <Input
          type="email"
          title={t('plugins.signInForm.email')}
          error={errors.email?.message}
          onChange={(value: string) => onChange({ target: { value } })}
          {...emailField}
        />
        <Input
          type="password"
          title={t('plugins.signInForm.password')}
          error={errors.password?.message}
          onChange={(value: string) => onChangePassword({ target: { value } })}
          {...passwordField}
        />
        <button
          className={cn(styles.signInForm__forgotPassword, classes.forgotPassword)}
          type="button"
          onClick={() => {}}
        >
          {t('plugins.signInForm.forgotPassword')}
        </button>
      </div>
      <Button type="submit" title={t('plugins.signInForm.signIn')} />
    </form>
  );
};
