import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { AppContext } from "../contexts/AppContext";
import { SET_SELECTED_CHANNEL, UPDATE_FEED_VIDEOS } from "../reducers/globalReducer";

const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedChannel } = state;

  const setselectedChannel = (name) => {
    dispatch({ type: SET_SELECTED_CHANNEL, payload: name });
  };

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedChannel && "#FC1503",
            color: "white",
          }}
          key={category.name}
          onClick={() => setselectedChannel(category.name)}
        >
          <span
            style={{
              color: category.name === selectedChannel ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedChannel ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
