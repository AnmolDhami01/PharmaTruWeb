// import * as React from "react";
// import Button from "@mui/material/Button";

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

// import { Menu, MenuItem, Paper } from "@mui/material";

// const useStyles = makeStyles({
//   button: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "16px",
//     fontSize: "16px",
//     border: "none",
//     "&:hover": {
//       dropdown: {
//         display: "block",
//       },
//     },
//   },
//   dropdown: {
//     display: "none",
//     position: "absolute",
//     backgroundColor: "#f1f1f1",
//     minWidth: "160px",
//     boxShadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`,
//     zIndex: 1,
//   },
// });

// export default function SimpleMenu() {
//   const classes = useStyles();
//   return (
//     <>
//       <Button className={classes.button}>Hover</Button>
//       <Menu className={classes.dropdown}>
//         <a href="#">Link 1</a>
//         <a href="#">Link 2</a>
//         <a href="#">Link 3</a>
//         {/* <MenuItem />
//         <MenuItem />
//         <MenuItem /> */}
//         {/* <Item />
//         <Item /> */}
//       </Menu>
//     </>
//   );
// }

// import React from "react";
// const useStyles = makeStyles({
//   dropbtn: {
//     backgroundColor: "#04AA6D",
//     color: "white",
//     padding: "16px",
//     fontSize: "16px",
//     border: "none",
//   },

//   dropdown: {
//     position: "relative",
//     display: "inlineBlock",
//   },

//   dropdowncontent: {
//     display: "none",
//     position: "absolute",
//     backgroundColor: "#f1f1f1",
//     minWidth: "160px",
//     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
//     zIndex: "1",
//   },

//   dropdowncontent: {
//     color: "black",
//     padding: "12px 16px",
//     textDecoration: "none",
//     display: "block",
//   },
// });

// export default function SimpleMenu() {
//   //   const classes = useStyles();
//   return (
//     <>
//       <div class="dropdown">
//         <button class="dropbtn">Dropdown</button>
//         <div class="dropdown-content">
//           <a href="#">Link 1</a>
//           <a href="#">Link 2</a>
//           <a href="#">Link 3</a>
//         </div>
//       </div>
//     </>
//   );
// }

import { MedicalServices } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        startIcon={<MenuIcon />}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseEnter={handleClick}
      >
        {props.heading}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
      >
        <Button
          fontFamily="Poppins"
          startIcon={<MedicalServices />}
          onClick={handleClose}
        >
          {props.item1}
        </Button>
        <Button startIcon={<MedicalServices />} onClick={handleClose}>
          {props.item2}
        </Button>
        <Button startIcon={<MedicalServices />} onClick={handleClose}>
          {props.item3}
        </Button>
        <Button startIcon={<MedicalServices />} onClick={handleClose}>
          {props.item4}
        </Button>
      </Menu>
    </div>
  );
}

export default SimpleMenu;
