import { Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../../utils/constants";

function ChannelCardContent({ channel }) {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <CardMedia
        image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channel?.snippet?.title}
        sx={{
          borderRadius: "50%",
          width: 180,
          height: 180,
          mb: 2,
          border: "1px solid #e3e3e3",
        }}
      />
      <Typography variant="h6">
        {channel?.snippet?.title}{" "}
        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
      </Typography>
      {channel?.statistics?.subscribeCount && (
        <Typography>
          {parseInt(channel?.statistics?.subscribeCount).toLocaleString()}{" "}
          Subscribers
        </Typography>
      )}
    </CardContent>
  );
}

export default ChannelCardContent;
