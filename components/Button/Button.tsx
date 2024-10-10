"use client";
import React from "react";
import styles from "./Button.module.css";
import useDarkTheme from "@/hooks/useDarkTheme";
import classNames from "classnames"; // Импортируем classNames

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({ text, onClick, isActive }: ButtonProps) => {
  const isDarkThemeEnabled = useDarkTheme();

  const buttonClasses = classNames(styles.button, {
    [styles.active]: isActive,
    [styles.darkTheme]: isDarkThemeEnabled,
  });

  return (
    <button className={buttonClasses} onClick={() => onClick?.()}>
      {text}
    </button>
  );
};

export default Button;
