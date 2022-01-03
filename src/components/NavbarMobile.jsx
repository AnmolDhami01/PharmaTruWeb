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
    justifyContent: "flex-start",
    alignItems: "center",
    background: "#191919",
    padding: "5px 20px",
  },
  navbar1: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    background: "#191919",
    padding: "10px 20px",
  },
});
function NavbarMobile() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navbar}>
        <Button
          href="mailto:Info@tru-web.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
          }}
          startIcon={<Mail />}
        ></Button>

        <Button
          href="tel:8628825697"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
          }}
          startIcon={<PhoneInTalkSharp />}
        ></Button>

        <Button
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
          }}
          startIcon={<FacebookIcon />}
        ></Button>

        <Button
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
          }}
          startIcon={<InstagramIcon />}
        ></Button>

        <Button
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
          }}
          startIcon={<TwitterIcon />}
        ></Button>

        <Button
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            margin: "-15px",
          }}
          startIcon={<LinkedInIcon />}
        ></Button>
      </div>
    </>
  );
}

export default NavbarMobile;
