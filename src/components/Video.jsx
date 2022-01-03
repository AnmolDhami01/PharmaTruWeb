import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Video(props) {
  return (
    <Link to="/change" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <iframe
            width="320"
            height="345"
            src="https://www.youtube.com/embed/gsyoAhDI--E"
          ></iframe>
        </CardContent>
      </Card>
    </Link>
  );
}
