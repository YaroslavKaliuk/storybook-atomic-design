import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export const Colors: FC = () => {
  return (
    <table className={cn(styles.colors)}>
      <thead>
        <tr>
          <th>Vars</th>
          <th>Document GPS</th>
          <th>UNIQTrack</th>
        </tr>
      </thead>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Basic
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--primary)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--primary)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--primary)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--white)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--white)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--white)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--black)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--black)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--black)' }}></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Red
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--red-60)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--red-60)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--red-60)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--red-80)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--red-80)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--red-80)' }}></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Teal
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--teal-60)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--teal-60)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--teal-60)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--teal-80)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--teal-80)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--teal-80)' }}></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Grey
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--grey-8)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-8)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-8)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--grey-20)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-20)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-20)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--grey-40)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-40)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-40)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--grey-60)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-60)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-60)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--grey-80)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-80)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-80)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--grey-100)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-100)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--grey-100)' }}></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Blue
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--blue-8)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-8)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-8)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--blue-20)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-20)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-20)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--blue-20)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-40)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-40)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--blue-60)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-60)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-60)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--blue-80)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-80)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-80)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--blue-100)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-100)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--blue-100)' }}></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Yellow
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--yellow-8)</div>
        </td>
        <td>
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--yellow-8)' }}></div>
        </td>
        <td className="digitrack">
          <div className={styles.colors__item} style={{ backgroundColor: 'var(--yellow-8)' }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--yellow-20)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-20)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-20)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--yellow-40)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-40)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-40)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--yellow-60)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-60)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-60)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--yellow-80)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-80)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-80)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--yellow-100)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-100)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--yellow-100)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Transparent
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--transp-blue-60-20)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--transp-blue-60-20)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--transp-blue-60-20)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--transp-grey-100-32)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--transp-grey-100-32)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--transp-grey-100-32)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--transp-grey-100-80)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--transp-grey-100-80)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--transp-grey-100-80)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.colors__title}>
          Gradient
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--gradient-blue-1)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundImage: 'var(--gradient-blue-1)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--gradient-blue-1)' }}
          ></div>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.colors__var}>var(--gradient-blue-2)</div>
        </td>
        <td>
          <div
            className={styles.colors__item}
            style={{ backgroundImage: 'var(--gradient-blue-2)' }}
          ></div>
        </td>
        <td className="digitrack">
          <div
            className={styles.colors__item}
            style={{ backgroundColor: 'var(--gradient-blue-2)' }}
          ></div>
        </td>
      </tr>
    </table>
  );
};
