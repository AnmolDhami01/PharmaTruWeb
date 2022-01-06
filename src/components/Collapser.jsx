import { Collapse, FormControlLabel, Paper, Switch } from "@mui/material";
import React from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Paper from "@material-ui/core/Paper";
// import Switch from "@material-ui/core/Switch";
// import Collapse from "@material-ui/core/Collapse";

export default function Collapser() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div>
      <FormControlLabel
        style={{ position: "relative", top: "-5px", left: "5px" }}
        control={
          <Switch
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
            }}
          />
        }
        label=""
      />
      <div style={{ display: "flex" }}>
        <Collapse in={isChecked}>
          {/* <svg style={{ width: 100, height: 100 }}>
              <polygon
                points="0,80 45,00, 80,70"
                style={{
                  fill: "orange",
                  stroke: "dimgrey",
                  strokeWidth: 1,
                }}
              />
            </svg> */}
          <div
            className="Main_Categories"
            style={{ position: "absolute", left: "9px" }}
          >
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
            <a href="#">
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
            </a>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
