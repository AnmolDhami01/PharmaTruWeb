import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#0c8540 ",
    textDecoration: "none",

    "& a": {
      textDecoration: "none",
      color: "#0c8540",
    },
  },
  links1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default function ControlledAccordion() {
  const classes = useStyles();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontFamily="Poppins">
            <MenuIcon />
            Categories
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.links}>
            <a href="#">
              <HealthAndSafetyIcon />
              PCD Pharma Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Third Party Manufacturing
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Cosematic Derma Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Allopathic Drug Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Cardiac Daibatic Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Pediatric Range Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Medicine Manufacturing Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Pharma Business Opportunties
            </a>
            {/* <a href="#">
              <HealthAndSafetyIcon />
              Homeopathic Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Derma Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Gyanae Franchise
            </a>

            <a href="#">
              <HealthAndSafetyIcon />
              Neuropsychiaty Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Orto Surgery Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Pediatric Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Pharma Capsule Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Pharma Tablet Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Diabetic Product Franchise
            </a>
            <a href="#">
              <HealthAndSafetyIcon />
              Third Party Franchise
            </a> */}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
