import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

// Это готовый тип из React, который описывает все стандартные props для <input>
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string; // Наш кастомный проп для текста метки
  variant?: "default" | "primary" | "error";
}

export const Input = ({ variant = "default", label, className, ...props }: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${styles[variant]} ${className ?? ""}`}
        placeholder=" "
        {...props}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};