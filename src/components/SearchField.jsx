import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

function SearchField({ term, setTerm, onSubmit, width, id, className }) {
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className={className || "search-bar"}
        placeholder="Search...."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ width }}
        
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchField;
