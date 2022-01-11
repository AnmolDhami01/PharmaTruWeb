import React, { useContext } from "react";

import { makeStyles } from "@mui/styles";

import Button from "@mui/material/Button";
import { Mail, MailOutlineSharp, PhoneInTalkSharp } from "@mui/icons-material";
import { Container, Hidden, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles({
  section1: {
    display: "inline-flex",

    padding: "10px 0px",
  },

  mainDiv: {
    display: "flex",
    background: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Container: {
    display: "flex !important",

    alignItems: "center",
    justifyContent: "space-between",
  },
});
function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Container maxWidth="xl" className={classes.Container}>
        <div className={classes.section1}>
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
                style={{
                  color: "white",
                  marginLeft: "25px",
                  marginRight: "7px",
                }}
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
              <PhoneInTalkSharp
                style={{ color: "white", marginRight: "7px" }}
              />
              <Hidden smDown>+91-8628825697</Hidden>
            </a>
          </Typography>
        </div>

        <div className={classes.section1}>
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
      </Container>
    </div>
  );
}

export default Navbar;
