"use client";
import { useEffect } from "react";
import useDarkTheme from "@/hooks/useDarkTheme";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const isDarkThemeEnabled = useDarkTheme();

  useEffect(() => {
    if (isDarkThemeEnabled) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    return () => {
      document.body.classList.remove("dark-theme");
    };
  }, [isDarkThemeEnabled]);

  return <>{children}</>;
};

export default ThemeWrapper;
