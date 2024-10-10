import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const useDarkTheme = () => {
  return useSelector((state: RootState) => state.layout.darkThemeEnabled);
};

export default useDarkTheme;
