import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Main = () => {
  let navigate = useNavigate();
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");

  useEffect(() => {
    if (!auth_token) {
      navigate("/login");
    }
  });

  return (
    <div>
      <h1>Main page</h1>
    </div>
  );
};

export default Main;
