import { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import { Video, Videos } from "./";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import { AppContext } from "../contexts/AppContext";
import {
  SET_VIDEO_DETAIL
} from "../reducers/globalReducer";

const VideoDetail = () => {
  const { id } = useParams();

  const { state, dispatch } = useContext(AppContext);
  const { videoDetail } = state;

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      dispatch({ type: SET_VIDEO_DETAIL, payload: data?.items?.[0] || {} });
    });

    // fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
    //   (data) => setRelatedVideos(data?.items)
    // );
  }, [id]);

  const { snippet, statistics } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignitems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.viewCount || 0).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount || 0).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Typography color="#fff" variant="body1" p={2}>
              {snippet?.description}
            </Typography>
          </Box>
        </Box>
        {/* <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center">
          <Videos videos={relatedVideos} direction="column" />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
