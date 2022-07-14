import styles from './button.module.scss';

export enum BUTTON_COLORS {
  Pistachio = 'pistachio',
  Green = 'green',
  Violet = 'violet',
  White = 'white',
  Pink = 'pink',
  Orange = 'orange',
  TransparentLight = 'transparent-light',
  TransparentDark = 'transparent-dark',
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  buttonColor: BUTTON_COLORS;
  href?: string;
  rel?: string;
  target?: string;
};

export const Button = ({
  children,
  className = '',
  buttonColor,
  href = '',
  rel = '',
  target = '',
}: ButtonProps) => {
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={`${styles.button} ${styles[buttonColor]} ${className && styles[className]}`}
    >
      {children}
    </a>
  );
};

export default Button;
