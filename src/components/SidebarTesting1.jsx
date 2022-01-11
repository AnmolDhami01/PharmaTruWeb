import { Container, Grid, Hidden, makeStyles } from "@mui/material";
import React from "react";
import Card2 from "./Card2";
import Monoply from "../static/istockphoto-486763752-612x612.jpg";
import Cancer from "../static/c13c84ef12b0467ca0ba883951aa11ec.jpg";
import EyeDrops from "../static/download.jpg";
import Dental from "../static/dental.jpg";
import Injectable from "../static/Injectable.jpg";
import Ophthalmic from "../static/Ophthalmic.jpg";
import Ortho from "../static/Ortho.jpg";
import Ayurvedic from "../static/Ayurvedic.jpg";
import ControlledAccordion from "./ControlledAccordions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ControlledAccordionCat from "./ControlledAccordionCat";

export default function SidebarTesting1(props) {
  //   const classes = useStyles;
  return (
    <div
      className="cat_container"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1500px",
        margin: "auto",
        // justifyContent: "space-between",
      }}
    >
      {/* <Grid container spacing={2} sx={{ py: 5 }}> */}

      <div
        className="side_container"
        style={{
          width: "45%",
          paddingRight: "30px",
          display: "inline-block",
        }}
      >
        {/* <Grid item xs={12} md={3} lg={3} direction="column"> */}
        <ControlledAccordionCat heading="Categories" />
        {/* </Grid> */}
      </div>

      <div className="grid_container">
        <Grid container spacing={2} sx={{ pb: 5 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Card2
              sx={{ mx: 5 }}
              style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
              heading={"Monopoly Franchise"}
              image={Monoply}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card2
              sx={{ mx: 5 }}
              style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
              heading={"Cancer Drugs Franchise "}
              image={Cancer}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card2
              sx={{ mx: 5 }}
              style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
              heading={"Eye's  Drops  Franchises"}
              image={EyeDrops}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Card2
              sx={{ mx: 5 }}
              style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
              heading={"Denatal Products Franchise"}
              image={Dental}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card2
              sx={{ mx: 5 }}
              style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
              heading={"Injectable Franchise "}
              image={Injectable}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card2
              //   sx={{ mx: 5 }}
              style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
              heading={"Ophthalmic  Franchise "}
              image={Ophthalmic}
            />
          </Grid>
        </Grid>
      </div>

      {/* </Grid> */}
    </div>
  );
}
