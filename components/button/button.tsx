import Link from 'next/link';

export enum BUTTON_COLORS {
  Green = 'green',
  Purple = 'purple',
  White = 'white',
  Pink = 'pink',
  Red = 'red',
  Transparent = 'transparent',
}

export const Button = ({ children, className = '', buttonColor, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <a className={`${className} ${buttonColor}`}>{children}</a>
    </Link>
  );
};

export default Button;
