import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import NavigationBar from "./navbar";
import Carousel from "./carousel";
import GameList from "./game-list";
import SearchFilter from "./search-filter";

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
      <SearchFilter />
      {/*<GameList />*/}
    </>
  );
};

export default Main;
