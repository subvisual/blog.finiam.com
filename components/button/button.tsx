import styles from './button.module.scss';

export enum BUTTON_COLORS {
  Pistachio = 'pistachio',
  Violet = 'violet',
  White = 'white',
  Pink = 'pink',
  Orange = 'orange',
  Transparent = 'transparent',
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  buttonColor: BUTTON_COLORS;
  href: string;
};

export const Button = ({ children, className = '', buttonColor, href }: ButtonProps) => {
  return (
    <a href={href} className={`${styles.button} ${styles[buttonColor]} ${styles[className]}`}>
      {children}
    </a>
  );
};

export default Button;
