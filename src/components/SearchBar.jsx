import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchField from "./SearchField";

function SearchBar({ width }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <SearchField
      term={searchTerm}
      setTerm={setSearchTerm}
      onSubmit={handleSubmit}
    />
  );
}

export default SearchBar;
