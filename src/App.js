import React, { useEffect, useState } from "react";
import AppContext from "./contexts/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Home from "./components/admin/Home";
import decodeJWT from "./utils/decodeJWT";

function App(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [user, setUser] = useState({ id: 1 });

  const restoreUser = () => {
    const token = decodeJWT();
    if (token.succes) setUser(token.tokenData);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
      <ToastContainer />
      {user ? <Home /> : <Login />}
    </AppContext.Provider>
  );
}

export default App;
