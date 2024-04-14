import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCardContent } from "..";

function ChannelLinkCard({ channel, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <ChannelCardContent channel={channel} />
      </Link>
    </Box>
  );
}

export default ChannelLinkCard;
