import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export default function HoveredLinks(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        color: "#0c8540",
        "& ul": { padding: 0 },
        "& Icon": { color: "#0c8540" },
      }}
      subheader={<li />}
    >
      <ListItemButton>
        <ListItemIcon>
          <LocalHospitalIcon sx={{ color: "#0c8540" }} />
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocalHospitalIcon sx={{ color: "#0c8540" }} />
        </ListItemIcon>
        <ListItemText primary={props.text1} />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalHospitalIcon sx={{ color: "#0c8540" }} />
        </ListItemIcon>
        <ListItemText primary={props.text2} />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalHospitalIcon sx={{ color: "#0c8540" }} />
        </ListItemIcon>
        <ListItemText primary={props.text3} />
      </ListItemButton>
    </List>
  );
}
