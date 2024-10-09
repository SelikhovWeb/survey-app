import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/logo_black.svg" alt="Logo" width={24} height={24} />
    </div>
  );
};

export default Header;
