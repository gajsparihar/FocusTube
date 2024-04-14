import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCardContent } from "..";

function ChannelSelectCard({ channel }) {
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
        margin: "auto"
      }}
    >
      <ChannelCardContent channel={channel} />
    </Box>
  );
}

export default ChannelSelectCard;
