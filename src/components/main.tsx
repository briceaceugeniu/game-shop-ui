import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import NavigationBar from "./navbar";
import Carousel from "./carousel";

const Main = () => {
  let navigate = useNavigate();
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");

  useEffect(() => {
    if (!auth_token) {
      // navigate("/login");
    }
  });

  return (
    <>
      <NavigationBar />
      <Carousel />
    </>
  );
};

export default Main;
