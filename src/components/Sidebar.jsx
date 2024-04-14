import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { AppContext } from "../contexts/AppContext";
import {
  SET_SELECTED_CHANNEL,
  UPDATE_FEED_VIDEOS,
} from "../reducers/globalReducer";

const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedChannel, myChannels } = state;

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
      {Object.keys(myChannels).map((channelId) => {
        const channel = myChannels[channelId];
        return (
          <button
            className="category-btn"
            style={{
              background: channelId === selectedChannel && "#FC1503",
              color: "white",
            }}
            key={channelId}
            onClick={() => setselectedChannel(channelId)}
          >
            {/* <span
              style={{
                color: channelId === selectedChannel ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {channel.icon || ''}
            </span> */}
            <span
              style={{
                opacity: channelId === selectedChannel ? "1" : "0.8",
              }}
            >
              {channel?.snippet?.title}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
