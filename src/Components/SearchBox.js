import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Data from "../data";

export default function SearchBox(props) {
  const { onSearchBoxValChange } = props;
  return (
    <Autocomplete
      id="combo-box-demo"
      options={Data}
      getOptionLabel={(option) => option.city}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Enter City" variant="outlined" />
      )}
      onChange={(e, val) => onSearchBoxValChange(val)}
    />
  );
}
