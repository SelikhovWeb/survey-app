"use client";
import Image from "next/image";
import React from "react";

interface GoBackButtonProps {
  isDarkThemeEnabled: boolean;
}

const GoBackButton = ({ isDarkThemeEnabled }: GoBackButtonProps) => {
  const backIconSrc = isDarkThemeEnabled
    ? "/light/back_icon_white.svg"
    : "/dark/back_icon_black.svg";
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Image
      src={backIconSrc}
      alt="Go back"
      width={24}
      height={24}
      onClick={handleGoBack}
    />
  );
};

export default GoBackButton;
