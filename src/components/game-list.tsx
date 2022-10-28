import React from "react";
import { Stack } from "@mui/material";
import GameCard from "./game-card";
import Container from "@mui/material/Container";

const GameList = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "1.3em" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ flexWrap: "wrap" }}
      >
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </Stack>
    </Container>
  );
};

export default GameList;
