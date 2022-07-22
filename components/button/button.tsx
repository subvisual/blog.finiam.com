/* eslint-disable react/display-name */
import { forwardRef, Ref, } from "react";
import styles from "./button.module.scss";

export enum BUTTON_COLORS {
  Pistachio = "pistachio",
  Green = "green",
  Violet = "violet",
  White = "white",
  Pink = "pink",
  Orange = "orange",
  TransparentLight = "transparent-light",
  TransparentDark = "transparent-dark",
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  buttonColor: BUTTON_COLORS;
  href?: string;
  rel?: string;
  target?: string;
};

const Button = forwardRef(
  (
    {
      children,
      className = "",
      buttonColor,
      href = "",
      rel = "",
      target = "",
      ...props
    }: ButtonProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    return (
      <a
        href={href}
        rel={rel}
        ref={ref}
        target={target}
        className={`${styles.button} ${styles[buttonColor]} ${
          className && styles[className]
        }`}
        {...props}
      >
        {children}
      </a>
    );
  }
);

export default Button;
