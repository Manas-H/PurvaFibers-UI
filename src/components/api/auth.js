import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthChecker = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Token exists, user is logged in
      setIsLoggedIn(true);
    } else {
      // Token does not exist, user is not logged in
      setIsLoggedIn(false);
      // Redirect to login page
      history("/login");
    }
  }, [history]);

  return isLoggedIn ? <>{children}</> : null;
};

export default AuthChecker;
