import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export interface ExampleProps {
  classes?: Partial<Record<'root', string>>;
}

export const Example: FC<ExampleProps> = ({ classes = {} }) => (
  <div className={cn(styles.example, classes.root)} data-id-component="example"></div>
);
