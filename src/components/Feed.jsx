import { useState, useEffect, useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { AppContext } from "../contexts/AppContext";
import { UPDATE_FEED_VIDEOS } from "../reducers/globalReducer";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const { state, dispatch } = useContext(AppContext);
  const { feedVideos, selectedChannel, myChannels } = state;
  const navigate = useNavigate();

 

  useEffect(() => {
    if (!selectedChannel) return;
    
    fetchFromAPI(`search?part=snippet&channelId=${selectedChannel}`).then((data) => {
      dispatch({ type: UPDATE_FEED_VIDEOS, payload: data?.items || [] });
    });
  }, [selectedChannel]);

  if (Object.keys(myChannels).length === 0) {
    return navigate('/personal')
  }

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
        </Typography>
      </Box>
      <Box p={2} sx={{ overlfowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {myChannels[selectedChannel]?.snippet?.title} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={feedVideos} />
      </Box>
    </Stack>
  );
};

export default Feed;
