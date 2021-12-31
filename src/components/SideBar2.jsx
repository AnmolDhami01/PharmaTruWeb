import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MedicalServicesTwoToneIcon from "@mui/icons-material/MedicalServicesTwoTone";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import { Link } from "react-router-dom";

export default function SideBar2() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Link className="LinkSidebar" to="/gernalMedicines">
            General Medicines
          </Link>,
          <Link className="LinkSidebar" to="/herbalAyurvedic">
            Herbal and Ayurvedic
          </Link>,
          <Link className="LinkSidebar" to="/heartCardiac">
            Heart and Cardiac
          </Link>,
          <Link className="LinkSidebar" to="/injectables">
            Injectables
          </Link>,
          <Link className="LinkSidebar" to="/liverProductes">
            Liver Productes
          </Link>,
          <Link className="LinkSidebar" to="/antibiotics">
            Antibiotics and Antibacterial
          </Link>,
          <Link className="LinkSidebar" to="/syrups">
            Solutions, Suspensions and Syrups
          </Link>,
          <Link className="LinkSidebar" to="/dermatology">
            Dermatology Products
          </Link>,
          <Link className="LinkSidebar" to="/otolaryngology">
            Otolaryngology Products
          </Link>,
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <MedicalServicesTwoToneIcon />
              ) : (
                <LocalHospitalTwoToneIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["All Cilents", "Medicine", "Health and Fitness Realted Products"].map(
          (text, index) => (
            <ListItem button key={text}>
              <MedicalServicesTwoToneIcon>
                {index % 2 === 0 ? (
                  <MedicalServicesTwoToneIcon />
                ) : (
                  <MedicalServicesTwoToneIcon />
                )}
              </MedicalServicesTwoToneIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List> */}
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {/* {anchor} */}
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
