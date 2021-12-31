import React from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function Card1(props) {
  return (
    <>
      <Grid item xs={12} sm={4} md={4}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            // image="https://source.unsplash.com/random"
            image={props.image}
            style={props.style}
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>

            <Typography>{props.body}</Typography>
          </CardContent>
          <CardActions>
            <Button style={{ color: "#0c8540" }} size="small">
              View
            </Button>
            <Button style={{ color: "#0c8540" }} size="small">
              Research
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
