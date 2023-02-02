import { useEffect, useState } from "react";
import Switch from "./Switch";

const DarkModeSwitch: React.FC = () => {
  const GETIR_LOCAL_STORAGE_THEME_NAME = "getir-local-storage-theme";
  const theme = localStorage?.getItem(GETIR_LOCAL_STORAGE_THEME_NAME);
  const [checked, setChecked] = useState(theme !== "dark");

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.remove("dark");
      localStorage?.setItem(GETIR_LOCAL_STORAGE_THEME_NAME, "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage?.setItem(GETIR_LOCAL_STORAGE_THEME_NAME, "dark");
    }
  }, [checked]);

  const toggle = (): void => {
    setChecked((prev) => !prev);
  };

  return (
    <Switch
      id="darkModeSwitchId"
      key="darkModeSwitchKey"
      name="darkModeSwitchName"
      checked={checked}
      onChange={toggle}
    />
  );
};

export default DarkModeSwitch;
