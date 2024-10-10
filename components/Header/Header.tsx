"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useDarkTheme from "@/hooks/useDarkTheme";
import classNames from "classnames";

const Header = () => {
  const isDarkThemeEnabled = useDarkTheme();

  const shouldDisplayBackButtonInHeader = useSelector(
    (state: RootState) => state.layout.shouldDisplayBackButtonInHeader
  );

  const logoSrc = isDarkThemeEnabled
    ? "/light/logo_white.svg"
    : "/dark/logo_black.svg";

  return (
    <div
      className={classNames(styles.header, {
        [styles.darkTheme]: isDarkThemeEnabled,
      })}
    >
      {shouldDisplayBackButtonInHeader && (
        <div className={styles.goBackButtonWrapper}>
          <GoBackButton isDarkThemeEnabled={isDarkThemeEnabled} />
        </div>
      )}

      <Image src={logoSrc} alt="Logo" width={24} height={24} />
    </div>
  );
};

export default Header;
