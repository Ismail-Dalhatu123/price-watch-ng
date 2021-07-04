import React, { useState } from "react";
import AppContext from "./contexts/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Home from "./components/admin/Home";

function App(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
      <ToastContainer />
      {user ? <Home /> : <Login />}
    </AppContext.Provider>
  );
}

export default App;
