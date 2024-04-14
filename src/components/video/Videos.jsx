import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelLinkCard } from "..";

function Videos({ videos, direction }) {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos &&
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && <ChannelLinkCard channel={item} />} */}
          </Box>
        ))}
    </Stack>
  );
}

export default Videos;
