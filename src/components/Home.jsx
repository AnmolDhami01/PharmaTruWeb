import * as React from "react";
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
import Card1 from "./Card";
import { createMuiTheme, Hidden, Paper } from "@mui/material";
import Monoply from "../static/istockphoto-486763752-612x612.jpg";
import Cancer from "../static/c13c84ef12b0467ca0ba883951aa11ec.jpg";
import EyeDrops from "../static/download.jpg";
import Dental from "../static/dental.jpg";
import Injectable from "../static/Injectable.jpg";
import Ophthalmic from "../static/Ophthalmic.jpg";
import Derma from "../static/Derma.jpg";
import Injection from "../static/Injection.jpg";
import Pharma from "../static/Pharma.jpg";
import Contract from "../static/Contract.jpg";
import HandWash from "../static/HandWash.jpg";
import HandSanitizer from "../static/HandSanitizer.jpg";
import Ortho from "../static/Ortho.jpg";
import Ayurvedic from "../static/Ayurvedic.jpg";
import PcdPharma from "../static/PcdPharma.jpg";
import Customers from "../static/Customers.jpg";
import ThirdPartyManufacture from "../static/ThirdPartyManufacture.jpg";
import Card2 from "./Card2";
import Coursal from "./Coursal";
import { green } from "@mui/material/colors";
import SimpleMenu from "./SimpleMenu";
import MenuIcon from "@mui/icons-material/Menu";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import Video from "./Video";
import BasicPopover from "./BasicPopover";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapser from "./Collapser";
import ControlledAccordions from "./ControlledAccordions";
import SidebarTesting from "./SidebarTesting";
import ControlledAccordion from "./ControlledAccordions";
import Caursal from "./Caursal";

function Copyright() {
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
      main: green[500],
    },

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

        <Container maxWidth="xl">
          <Caursal />
        </Container>

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
                      PCD/PHARMA FRANCHISE
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
                      THIRD PARTY
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

        <Grid container spacing={2}></Grid>

        <Hidden smDown>
          <Box
            sx={{
              pt: 7,
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
            spacing={1}
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

        <div className="Sidebar_Categories" style={{ display: "none" }}>
          <div className="Top_Categories">
            <MenuIcon style={{ color: "white", marginLeft: "15px" }} />
            <p className="Categories_p">Categories</p>
            <Collapser style={{ postion: "absolute" }} />
            {/* <ExpandMoreIcon style={{ color: "white", marginLeft: "15px" }} /> */}
          </div>
          {/* <div className="Main_Categories">
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
            <Button
              style={{
                background: "black",
                color: "white",
                borderRadius: "1 1 1 1",
              }}
            >
              View More
            </Button>
          </div> */}
        </div>

        {/* <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Pharma Monopoly Franchise"}
                body={
                  "Propaganda cum Distribution. In the Pharma industry, PCD is used for marketing and distribution rights."
                }
                image={Monoply}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Anti Cancer Drugs Franchise "}
                body={
                  "Anti-Cancer Drugs is an international medical journal, which aims to promote and encourage research "
                }
                image={Cancer}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Eye's  Drops  Franchises"}
                body={
                  "Problems like dry eyes, amblyopia, strabismus, age-related macular degeneration etc. become common."
                }
                image={EyeDrops}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Denatal Products Franchise"}
                body={
                  "Dental franchises are owned and operated by a managing company or investor.Dental Service Organizations "
                }
                image={Dental}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Injectable Phrama  Franchise "}
                body={
                  "Anti-Cancer Drugs is an international medical journal, which aims to promote and encourage research on anti-cancer agents"
                }
                image={Injectable}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Ophthalmic Pharma Franchise "}
                body={
                  "India is a home for approximately world’s 30% blind people. Half among these people are blind due to cataracts and others "
                }
                image={Ophthalmic}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Ayurvedic Pharma Franchise "}
                body={
                  "Ayurveda, a natural system of medicine, originated in India more than 3,000 years ago. The term Ayurveda is derived from the Sanskrit  "
                }
                image={Ayurvedic}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={"Ortho Pharma Franchise "}
                body={
                  "India is a home for approximately world’s 30% blind people. Half among these people are blind due to cataracts and others "
                }
                image={Ortho}
              />
            </Grid>
          </Grid> */}
        <Container maxWidth="xl">
          <SidebarTesting />
        </Container>

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
            alt="random"
          />
        </Container>

        {/* <div className="Sidebar_Categories_1">
          <div className="Top_Categories_1">
            <MenuIcon style={{ color: "white", marginLeft: "15px" }} />
            <p className="Categories_p_1">Categories</p>
          </div>
          <div className="Main_Categories_1">
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
          </div>
        </div> */}

        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ py: 5 }}>
            <Grid item xs={12} md={3} lg={3}>
              <ControlledAccordion />
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
              style={{ fontWeight: "500" }}
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
                <Coursal />
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
                style={{ color: "#0c8540" }}
              >
                Post Your Requirment for Pharma Companies
              </Typography>
              <Box textAlign="center">
                <BasicPopover fullWidth style={{ marginLeft: "470px" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* <Container sx={{ pt: 5, mb: 5, pb: 3 }} maxWidth="xl" component={Paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}> */}

        {/* </Grid>
          </Grid>
        </Container> */}

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
