import cn from 'classnames';
import { FC, useState } from 'react';

import { UISize } from '../../../types';
import styles from './styles.module.scss';

export interface AvatarProps {
  href?: string;
  imgSrc: string;
  size?: Exclude<UISize, UISize.xl>;
  userInitials: string;
  classes?: Partial<Record<'root' | 'img' | 'initials', string>>;
}

export const Avatar: FC<AvatarProps> = ({
  href,
  imgSrc,
  size = UISize.md,
  userInitials,
  classes = {},
}) => {
  const [error, setError] = useState(false);
  const Component = href ? 'a' : 'div';
  const props = href ? { href: `${href}` } : {};
  return (
    <Component
      className={cn(styles.avatar, styles.avatar + size, classes.root)}
      {...props}
      data-id-component="avatar"
    >
      {!error && (
        <img
          src={imgSrc}
          alt="image"
          loading="lazy"
          onError={() => setError(true)}
          className={cn(styles.avatar__img, classes.img)}
        />
      )}
      <span className={cn(styles.avatar__initials, classes.initials)}>{userInitials}</span>
    </Component>
  );
};
