"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const shouldDisplayBackButtonInHeader = useSelector(
    (state: RootState) => state.layout.shouldDisplayBackButtonInHeader
  );

  return (
    <div className={styles.header}>
      {shouldDisplayBackButtonInHeader && (
        <div className={styles.goBackButtonWrapper}>
          <GoBackButton />
        </div>
      )}

      <Image src="/logo_black.svg" alt="Logo" width={24} height={24} />
    </div>
  );
};

export default Header;
