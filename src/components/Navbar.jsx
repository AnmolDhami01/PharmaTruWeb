import React, { useContext } from "react";

import { makeStyles } from "@mui/styles";

import Button from "@mui/material/Button";
import { Mail, MailOutlineSharp, PhoneInTalkSharp } from "@mui/icons-material";
import { Hidden, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles({
  navbar: {
    display: "flex",

    padding: "10px 20px",
  },
  navbar1: {
    display: "flex",

    padding: "10px 20px",
  },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "black",
  },
});
function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.topbar}>
      <div className={classes.navbar}>
        <Typography pr={2}>
          <a
            href="mailto:Info@tru-web.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "15px",
            }}
          >
            <Mail
              style={{ color: "white", marginLeft: "25px", marginRight: "7px" }}
            />
            <Hidden smDown>Info@tru-web.com</Hidden>
          </a>
        </Typography>
        <Typography>
          <a
            href="tel:8628825697"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              // paddingRight: "908px",
            }}
          >
            <PhoneInTalkSharp style={{ color: "white", marginRight: "7px" }} />
            <Hidden smDown>+91-8628825697</Hidden>
          </a>
        </Typography>
      </div>

      <div className={classes.navbar1}>
        <Typography>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "25px",
            }}
          >
            <FacebookIcon style={{ color: "white" }} />
            {/* <Hidden smDown>Fb.com/tru-webmedia</Hidden> */}
          </a>
        </Typography>

        <Typography>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "25px",
            }}
          >
            <InstagramIcon style={{ color: "white" }} />
            {/* <Hidden smDown>Instagram.com/tru-webmedia</Hidden> */}
          </a>
        </Typography>

        <Typography>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "25px",
            }}
          >
            <TwitterIcon style={{ color: "white" }} />
            {/* <Hidden smDown>Twitter.com/tru-webmedia</Hidden> */}
          </a>
        </Typography>

        <Typography>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "25px",
            }}
          >
            <LinkedInIcon style={{ color: "white" }} />
            {/* <Hidden smDown>LinkedIn.com/tru-webmedia</Hidden> */}
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default Navbar;
