"use client";
import Image from "next/image";
import React from "react";

const GoBackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Image
      src="/back_icon.svg"
      alt="Go back"
      width={24}
      height={24}
      onClick={handleGoBack}
    />
  );
};

export default GoBackButton;
