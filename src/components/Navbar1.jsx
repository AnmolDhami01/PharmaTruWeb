import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import PersonIcon from "@mui/icons-material/Person";
import { Button, Container, Hidden, Modal, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import SideBar2 from "./SideBar2";
import mainlogo from "../static/mainlogo.png";
import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainlogo: {
    width: "171px",
    height: "57px",
  },

  ajaxSearch: {},
  loginDetails: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "70%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "84ch",
    },
  },
}));

export default function Navbar1() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "static",
          paddingTop: "10px",
          paddingBottom: "10px",

          background: "#0c8540",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <SideBar2 />
            <Typography variant="h6" noWrap component="div">
              <Link className="Link" to="/">
                <img
                  className={classes.mainlogo}
                  src={mainlogo}
                  alt="mainlogo"
                  srcset=""
                />
              </Link>
            </Typography>

            <div className={classes.ajaxSearch}>
              <Search sx={{ display: { xs: "none", sm: "block" } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <div className={classes.loginDetails}>
              <Link className="Link" to="signup">
                <Button color="inherit" startIcon={<PersonAddAltSharpIcon />}>
                  <Hidden smDown>Join Free</Hidden>
                </Button>
              </Link>

              <Link className="Link" to="signin">
                <Button color="inherit" startIcon={<PersonIcon />}>
                  <Hidden smDown>Sign In</Hidden>
                </Button>
              </Link>

              <Link className="Link" to="contactus">
                <Button
                  sx={{ display: { xs: "none", md: "flex" } }}
                  color="inherit"
                  startIcon={<EmailSharpIcon />}
                >
                  <Hidden smDown>Post Requirement</Hidden>
                </Button>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
