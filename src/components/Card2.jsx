import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Card2(props) {
  return (
    <Link to="/change" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Photos"
          height="250"
          // image="https://source.unsplash.com/random"
          image={props.image}
          style={props.style}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            style={{ textDecoration: "none" }}
          >
            {/* Lizard */}
            {props.heading}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography> */}
        </CardContent>
        {/* <CardActions>
        <Button style={{ color: "#0c8540" }} size="small">
          View
        </Button>
        <Button style={{ color: "#0c8540" }} size="small">
          Research
        </Button>
      </CardActions> */}
      </Card>
    </Link>
  );
}
