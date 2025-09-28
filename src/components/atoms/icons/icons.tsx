import { FC, useCallback } from 'react';

import * as IconsLibrary from '@frontend/ui-icons-v2';

import styles from './styles.module.scss';

export const Icons: FC = () => {
  const icons = Object.entries(IconsLibrary);

  const monoIcons = icons.filter(([name]) => name.includes('Mono'));
  const multiIcons = icons.filter(([name]) => name.includes('Multi'));
  const handleCopy = useCallback((name: string) => {
    void navigator.clipboard.writeText(`<${name} />`);
    alert(`<${name} /> - Copied!`);
  }, []);

  return (
    <div className={styles.icon}>
      <section>
        <h2>MonoColor</h2>
        <ol className={styles.icon__list}>
          {monoIcons.map(([name, Icon]) => (
            <li key={name} className={styles.icon__item} onClick={() => handleCopy(name)}>
              <span className={styles.icon__svg}>
                <Icon />
              </span>
              <span className={styles.icon__name}>{name}</span>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h2>MultiColor</h2>
        <ol className={styles.icon__list}>
          {multiIcons.map(([name, Icon]) => (
            <li key={name} className={styles.icon__item} onClick={() => handleCopy(name)}>
              <span className={styles.icon__svg}>
                <Icon />
              </span>
              <span className={styles.icon__name}>{name}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
