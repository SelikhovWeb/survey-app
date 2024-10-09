"use client";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({ text, onClick, isActive }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={() => onClick?.()}
    >
      {text}
    </button>
  );
};

export default Button;
