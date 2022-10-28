import React from "react";
import Container from "@mui/material/Container";
import Search from "./search";
import { Grid, Paper } from "@mui/material";
import SelectCategory from "./select-category";
import Sort from "./sort";

const SearchFilter = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "3em" }}>
      <Paper elevation={2}>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "lightgreen",
            border: "1px green solid",
            borderRadius: "4px",
            paddingBottom: "16px",
            paddingRight: "15px",
          }}
        >
          <Grid item md={4} xs={12}>
            <Search />
          </Grid>
          <Grid item md={4} xs={12}>
            <SelectCategory />
          </Grid>
          <Grid item md={4} xs={12}>
            <Sort />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SearchFilter;
