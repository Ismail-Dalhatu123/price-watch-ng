import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import Brightness2RoundedIcon from "@material-ui/icons/Brightness2Rounded";

function ThemeToggler({ className }) {
  const { theme, setTheme } = useContext(AppContext);
  return null;
  const changeTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }
    localStorage.setItem("theme", "light");
    setTheme("light");
  };
  if (theme === "light")
    return (
      <div style={{ cursor: "pointer" }} className={className}>
        <Brightness2RoundedIcon onClick={changeTheme} />
      </div>
    );
  return (
    <div style={{ color: "#fff", cursor: "pointer" }} className={className}>
      <WbSunnyRoundedIcon onClick={changeTheme} />
    </div>
  );
}

export default ThemeToggler;
