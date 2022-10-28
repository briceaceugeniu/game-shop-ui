import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Sort = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        sx={{ width: "100%", color: "gold", minWidth: "210px" }}
        size="small"
        options={sortOptions}
        color="success"
        defaultValue={sortOptions[4]}
        renderInput={(params) => <TextField {...params} label="Kategorie" />}
      />
    </div>
  );
};

const sortOptions = [
  {
    label: "Preis aufsteigend",
    value: "price-asc",
  },
  {
    label: "Preis absteigend",
    value: "price-desc",
  },
  {
    label: "Alphabetisch: A-Z",
    value: "alpha-asc",
  },
  {
    label: "Alphabetisch: Z-A",
    value: "alpha-desc",
  },
  {
    label: "Datum: Neue zuerst",
    value: "date-desc",
  },
  {
    label: "Datum: Alt zuerst",
    value: "date-asc",
  },
];

export default Sort;
