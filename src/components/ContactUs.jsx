import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import TextArea from "./TextArea";
import { Paper } from "@mui/material";
import { LocationCitySharp, PhoneInTalkSharp } from "@mui/icons-material";

function Copyright(props) {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Feel Free To Ask Questions Or Share Your Thoughts With Us
            </Typography>
            <Grid item xs={12} sm={6}>
              <Grid item>
                <Typography component="h2" variant="h5" pl={3} pt={5}>
                  <Button>
                    <PhoneInTalkSharp
                      style={{
                        width: "100px",
                        height: "100px",
                        color: "black",
                      }}
                    />
                  </Button>
                  Phone
                </Typography>
                <Typography
                  component="h2"
                  variant="h5"
                  className="ContactPhone"
                  style={{ left: "390px", top: "270px", position: "absolute" }}
                >
                  Call: +91-86288-25697
                </Typography>
              </Grid>
              <Typography component="h2" variant="h5" pl={3} pt={5}>
                <Button>
                  <LocationCitySharp
                    style={{
                      width: "100px",
                      height: "100px",
                      color: "black",
                    }}
                  />
                </Button>
                Office Location
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                style={{
                  left: "387px",
                  top: "421px",
                  position: "absolute",
                  width: "325px",
                }}
              >
                SCO-914, Cabin NO. B4, 2nd Floor Near Housing Board Chowk, NAC
                Manimajra, Chandigarh
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Container component="main" component={Paper} maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <EmailIcon />
            </Avatar>
            <Typography component="h2" variant="h5">
              Get in touch!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="Name"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="number"
                    autoComplete="number"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    multiline
                    rows={5}
                    label="Message"
                    name="number"
                    autoComplete="number"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}
