import { useState, useContext } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { ChannelSelectCard, SearchField } from "./";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { AppContext } from "../contexts/AppContext";
import {
  REMOVE_MY_CHANNELS,
  SET_SELECTED_CHANNEL,
  TOGGLE_CHANNEL_SELECTION,
  UPDATE_MY_CHANNELS,
} from "../reducers/globalReducer";
import { useNavigate } from "react-router-dom";

const PersonalizeView = () => {
  const [channels, setChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const { myChannels } = state;
  const navigate = useNavigate();

  const searchChannels = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&type=channel`).then(
      (data) => {
        setChannels(data?.items);
      }
    );
  };

  const selectChannel = (channel) => {
    dispatch({ type: UPDATE_MY_CHANNELS, payload: channel });
  };

  const removeSelectedChannel = (id) => {
    dispatch({ type: REMOVE_MY_CHANNELS, payload: id });
  };

  const showSelectedChannels = () => {
    const keys = Object.keys(myChannels);
    return keys.map((channelId) => {
      const channel = myChannels[channelId] || {};
      if (channel) {
        return (
          <>
            <Chip
              label={channel?.snippet?.title.slice(0, 25)}
              variant="outlined"
              onDelete={() => removeSelectedChannel(channelId)}
              style={{ color: "red", background: "white" }}
            />{" "}
          </>
        );
      }
    });
  };

  const channelSelectionDone = () => {
    const keys = Object.keys(myChannels) || [];
    dispatch({ type: SET_SELECTED_CHANNEL, payload: keys[0] });
    localStorage.setItem("myChannels", JSON.stringify(myChannels));
    navigate("/");
  };

  return (
    <Box p={2} sx={{ overlfowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search your channels you want to see videos from
      </Typography>
      <SearchField
        term={searchTerm}
        setTerm={setSearchTerm}
        onSubmit={searchChannels}
        className="search-personal-bar"
      />
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white" }}
        textAlign="center"
        style={{
          display: Object.keys(myChannels).length > 0 ? "block" : "none",
        }}
      >
        <Button
          className="yt-button"
          variant="contained"
          onClick={channelSelectionDone}
        >
          I have selected My channels
        </Button>
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {showSelectedChannels()}
      </Typography>

      <Stack direction={"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {channels &&
          channels.map((item, idx) => (
            <Box
              key={idx}
              style={{
                cursor: "pointer",
                display: !myChannels[item?.id?.channelId] ? "block" : "none",
              }}
              onClick={() => selectChannel(item, idx)}
            >
              {item.id.channelId && <ChannelSelectCard channel={item} />}
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default PersonalizeView;
