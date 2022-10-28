import * as React from "react";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <>
      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Suchen"
        size="small"
        variant="outlined"
        color="success"
      />
    </>
  );
};

export default Search;
