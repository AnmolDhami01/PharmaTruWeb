import * as React from "react";

import Button from "@mui/material/Button";

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
import Card1 from "./Card";
import { Hidden, Paper } from "@mui/material";

import Derma from "../static/Derma.jpg";

import Pharma from "../static/Pharma.jpg";
import Contract from "../static/Contract.jpg";

import Customers from "../static/Customers.jpg";
import ThirdPartyManufacture from "../static/ThirdPartyManufacture.jpg";
import Card2 from "./Card2";

import { green } from "@mui/material/colors";

import SimpleMenu from "./SimpleMenu";
import MenuIcon from "@mui/icons-material/Menu";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import Video from "./Video";
import BasicPopover from "./BasicPopover";

import Collapser from "./Collapser";

import SidebarTesting from "./SidebarTesting";
import ControlledAccordion from "./ControlledAccordions";
import FullWidthTabs from "./FullWidthTabs";
import Caursal from "./Caursal";

import HoverLinks from "./HoverLinks";
import SidebarTesting1 from "./SidebarTesting1";
import SpeedDialTooltipOpen from "./SpeedDialTooltipOpen";
import { makeStyles } from "@mui/styles";
import SlideShow from "./SlideShow";
import mainlogo from "../static/mainlogo.png";
const useStyles = makeStyles({
  Caursal_Main: {},
});

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://wordpressmu-701460-2339865.cloudwaysapps.com/"
      >
        TruWebMedia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c8540",
      secondary: "#f8b500",
    },
    // secondary: {
    //   main: amber,
    // },

    typography: {
      h1: {
        fontFamily: "Poppins",
      },
      h2: {
        fontFamily: "Poppins",
      },
      h3: {
        fontFamily: "Poppins",
      },
      h4: {
        fontFamily: "Poppins",
      },
      Button: {
        fontFamily: "Poppins",
      },
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        {/* </Box> */}

        {/* <Container
          maxWidth="xl"
          // component={Paper}
          sx={{
            pb: 3,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              // pt: "0.25%",
              maxWidth: 1530,
              maxHeight: 500,
            }}
            // image={PcdPharma}
            // alt="random"
          >
            <Caursal />
          </CardMedia>
        </Container> */}

        {/* <div className={classes.Caursal_Main}> */}
        <Container maxWidth="xl">
          <Caursal />
        </Container>
        {/* </div> */}

        {/* <Container maxWidth="xl">
          <SlideShow />
        </Container> */}

        {/* <SpeedDialTooltipOpen /> */}
        <Hidden smUp>
          <Box
            sx={{
              pt: 5,
              pb: 2,
            }}
          >
            <Container maxWidth="xl">
              <Grid container component={Paper}>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                    style={{ color: "#0c8540" }}
                    className="Poppins_font"
                    fontFamily="Poppins"
                  >
                    Browse Our Categories
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <SimpleMenu
                    heading={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        CATEGORIES
                      </Typography>
                    }
                    item1={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        PCD/PHARMA FRANCHISE
                      </Typography>
                    }
                    item2={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        COSEMATICS
                      </Typography>
                    }
                    item3={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        PHARMA BUSSINESS
                      </Typography>
                    }
                    item4={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        ENT MEDICINE
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <SimpleMenu
                    heading={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        PCD FRANCHISE
                      </Typography>
                    }
                    item1={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        DERMA FRANCHISE
                      </Typography>
                    }
                    item2={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        HOMOPATHIC FRANCHISE
                      </Typography>
                    }
                    item3={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        AYURVEDIC FRANCHISE
                      </Typography>
                    }
                    item4={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        ALLOPATHIC FRANCHISE
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <SimpleMenu
                    heading={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        PHARMA FRANCHISE
                      </Typography>
                    }
                    item1={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        DERMA FRANCHISE
                      </Typography>
                    }
                    item2={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        HOMOPATHIC FRANCHISE
                      </Typography>
                    }
                    item3={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        AYURVEDIC FRANCHISE
                      </Typography>
                    }
                    item4={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        ALLOPATHIC FRANCHISE
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <SimpleMenu
                    heading={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        THIRD PARTY MANUFACTURE
                      </Typography>
                    }
                    item1={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        DERMA FRANCHISE
                      </Typography>
                    }
                    item2={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        HOMOPATHIC FRANCHISE
                      </Typography>
                    }
                    item3={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        AYURVEDIC FRANCHISE
                      </Typography>
                    }
                    item4={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        ALLOPATHIC FRANCHISE
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Hidden>

        <Hidden smDown>
          <Box
            sx={{
              pt: 7,
              pb: 5,
            }}
          >
            <Container maxWidth="lg">
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                    style={{ color: "#0c8540" }}
                    className="Poppins_font"
                    fontFamily="Poppins"
                  >
                    Browse Our Categories
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <HoverLinks
                    heading={"CATEGORIES"}
                    text="PCD/PHARMA FRANCHISE"
                    text1="COSEMATICS"
                    text2="PHARMA BUSSINESS"
                    text3="ENT MEDICINE"
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <HoverLinks
                    heading={"PCD FRANCHISE"}
                    text="DERMA FRANCHISE"
                    text1="HOMOPATHIC FRANCHISE"
                    text2="ALLOPATHIC FRANCHISES"
                    text3="AYURVEDIC FRANCHISE"
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <HoverLinks
                    heading={"PHARMA FRANCHISE"}
                    text="DERMA FRANCHISE"
                    text1="HOMOPATHIC FRANCHISE"
                    text2="ALLOPATHIC FRANCHISES"
                    text3="AYURVEDIC FRANCHISE"
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <HoverLinks
                    heading={"THIRD PARTY"}
                    text="DERMA FRANCHISE"
                    text1="HOMOPATHIC FRANCHISE"
                    text2="ALLOPATHIC FRANCHISES"
                    text3="AYURVEDIC FRANCHISE"
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Hidden>

        <div className="Sidebar_Categories" style={{ display: "none" }}>
          <div className="Top_Categories">
            <MenuIcon style={{ color: "white", marginLeft: "15px" }} />
            <p className="Categories_p">Categories</p>
            <Collapser style={{ postion: "absolute" }} />
            {/* <ExpandMoreIcon style={{ color: "white", marginLeft: "15px" }} /> */}
          </div>
        </div>

        <Hidden smUp>
          <Container maxWidth="xl">
            <SidebarTesting heading="Categories" />
          </Container>
        </Hidden>

        <Hidden smDown>
          <SidebarTesting1 />
        </Hidden>

        <Container
          // component={Paper}
          maxWidth="xl"
          sx={{
            pt: 5,
            pb: 6,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "0.25%",
              maxWidth: 1520,
              maxHeight: 500,
            }}
            image={ThirdPartyManufacture}
            // image={mainlogo}
            alt="random"
          />
        </Container>

        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ py: 5 }}>
            <Grid item xs={12} md={3} lg={3}>
              <ControlledAccordion heading="Third Party Manufacturer" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Derma Manufacturer"}
                body={
                  " The form -derma is specifically used to name skin disorders and is used in many medical terms, especially in pathology. It ultimately comes from the Greek dérma, meaning “skin.The form -derma is specifically used to name skin disorders and is used. "
                }
                image={Derma}
              />
            </Grid>
            {/* <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Injection Manufacturer "}
                body={
                  "Injection Molding: Injection Molding is a manufacturing process for producing parts in large volume. It is most typically used in mass-production processes where the same part is being created thousands or even millions of times in succession.a"
                }
                image={Injection}
              />
            </Grid> */}
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Pharma Manufacturer"}
                body={
                  "Pharmaceutical manufacturer means any Person that develops, produces, manufactures, creates, licenses or distributes any drug, medicine or other substance used in the treatment, cure, prevention or diagnosis of any illness, disease, disorder or other condition."
                }
                image={Pharma}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Contract Manufacturer"}
                body={
                  "Pharmaceutical contract manufacturing process involves Pharmaceutical machinery, drug manufacturers contracting a firm for finished products or components. It can be seen as a type of outsourcing and outcoming.  "
                }
                image={Contract}
              />
            </Grid>
          </Grid>
        </Container>

        <Hidden smDown>
          <Box
            sx={{
              pt: 1,
              pb: 1,
            }}
          >
            <Container maxWidth="xl">
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                    style={{ color: "#0c8540" }}
                    fontFamily="Poppins"
                  >
                    How it Works
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Hidden>

        <Hidden smDown>
          <Stack
            sx={{ pt: 4, pb: 5 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              startIcon={<MapsUgcRoundedIcon />}
              style={{
                background: "#0c8540",
                color: "white",
                fontFamily: "Poppins",
              }}
              variant="contained"
            >
              Post your demands
            </Button>

            <Button
              startIcon={<SecurityRoundedIcon />}
              style={{
                background: "#0c8540",
                color: "white",
                fontFamily: "Poppins",
              }}
              variant="contained"
            >
              Your enquiry is verified
            </Button>

            <Button
              startIcon={<RocketLaunchIcon />}
              style={{
                background: "#0c8540",
                color: "white",
                fontFamily: "Poppins",
              }}
              variant="contained"
            >
              Your requirements are sent to right suppliers
            </Button>

            <Button
              startIcon={<ThumbUpAltSharpIcon />}
              style={{
                background: "#0c8540",
                color: "white",
                fontFamily: "Poppins",
              }}
              variant="contained"
            >
              Suppliers will contact you
            </Button>
          </Stack>
        </Hidden>

        <Box
          sx={{
            pt: 1,
            pb: 1,
          }}
        >
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12} md={12} lg={12}>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                  style={{ color: "#0c8540" }}
                  fontFamily="Poppins"
                >
                  Tru Web's Goals and Values
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            pt: 2,
            pb: 6,
          }}
        >
          <Container maxWidth="xl">
            <FullWidthTabs />
          </Container>
        </Box>

        <Box
          sx={{
            pt: 2,
            pb: 6,
          }}
        >
          <Container maxWidth="xl" component={Paper}>
            <Typography
              component="h2"
              variant="h2"
              align="left"
              color="text.primary"
              style={{ fontWeight: "500", color: "#0c8540" }}
              gutterBottom
              fontFamily="Poppins"
            >
              PharmaWeb
            </Typography>

            <Typography
              variant="p"
              align="left"
              color="text.secondary"
              paragraph
              fontFamily="Poppins"
            >
              PharmaWeb is a complete B2B Pharmaceutical marketplace in India
              where you can find top-rated Pharma companies in India who are
              dealing in PCD Pharma Franchise, monopoly Pharma Franchise, Third
              Party Manufacturing and much more. The idea for launching struck
              our mind in December 2016. This portal is run by a team of
              experienced professionals who is serving the pharmaceutical
              industry by providing digital solutions for the past 8+ years
            </Typography>

            <Grid container pt={5}>
              <Grid item md={12} xs={12}>
                <Caursal />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ pt: 5, mb: 5, pb: 3 }} maxWidth="md" component={Paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                fontFamily="Poppins"
                style={{ color: "#0c8540" }}
              >
                Post Your Requirment for Pharma Companies
              </Typography>
              <Box textAlign="center">
                <BasicPopover fullWidth />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container
          // component={Paper}
          sx={{
            pt: 5,
            pb: 6,
          }}
          maxWidth="xl"
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            fontFamily="Poppins"
            style={{ color: "#0c8540" }}
          >
            Few words from our Customers..
          </Typography>
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "0.25%",
              maxWidth: 1520,
              maxHeight: 500,
            }}
            image={Customers}
            alt="random"
          />
        </Container>

        <Container maxWidth="xl" sx={{ py: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <Video />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Video />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Video />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Video />
            </Grid>
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          PharmaTruWeb
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          The main purpose of PharmaWeb.com is to bring together entire Pharma
          Industry at one place and provide a platform to importers, exporters,
          manufacturers, traders, services providers, distributors, wholesalers
          and governmental agencies to find trade opportunities and promote
          their products and services online
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
