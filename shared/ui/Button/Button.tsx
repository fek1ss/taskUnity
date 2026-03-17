import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  const variantClass = variant ? styles[variant] : "";
  return (
    <button
      className={`${styles.button} ${variantClass} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};