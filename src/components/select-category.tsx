import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      color="success"
      sx={{ width: "100%", minWidth: "210px" }}
      size="small"
      options={categoryOptions}
      renderInput={(params) => <TextField {...params} label="Kategorie" />}
    />
  );
}

const categoryOptions = [
  { label: "Action", id: 1 },
  { label: "Adventure", id: 2 },
  { label: "RPG", id: 3 },
  { label: "Strategy", id: 4 },
  { label: "Sport", id: 5 },
  { label: "Simulation", id: 6 },
  { label: "Educational", id: 7 },
  { label: "MMO", id: 6 },
];
