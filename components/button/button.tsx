import Link from 'next/link';

import styles from './button.module.scss';

export enum BUTTON_COLORS {
  Pistachio = 'pistachio',
  Violet = 'violet',
  White = 'white',
  Pink = 'pink',
  Orange = 'orange',
  Transparent = 'transparent',
}

export const Button = ({ children, className = '', buttonColor, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <a className={`${styles.button} ${styles[buttonColor]} ${styles[className]}`}>{children}</a>
    </Link>
  );
};

export default Button;
