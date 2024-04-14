import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelLinkCard } from "..";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { AppContext } from "../../contexts/AppContext";
import { SET_CHANNEL_DETAIL } from "../../reducers/globalReducer";

const ChannelDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(AppContext);
  const { channelDetail, channelVideos } = state;

  useEffect(() => {
    Promise.allSettled([
      fetchFromAPI(`channels?part=snippet&id=${id}`),
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`),
    ]).then(([channel, videos]) => {
      const payload = {};
  
      if (channel?.status === "fulfilled") {
        payload.channel = channel?.value?.items[0] || {};
      }

      if (videos?.status === "fulfilled") {
        payload.videos = videos?.value?.items || [];
      }

      dispatch({ type: SET_CHANNEL_DETAIL, payload });
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,238,247,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelLinkCard channel={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
