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
      h2: {
        fontSize: 14,
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
        <Box
          sx={{
            pt: 5,
            pb: 6,
          }}
        >
          <Container maxWidth="lg" component={Paper}>
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="text.primary"
              gutterBottom
            >
              PharmaWeb
            </Typography>

            <Typography
              variant="h5"
              align="left"
              color="text.secondary"
              paragraph
            >
              PharmaWeb is a complete B2B Pharmaceutical marketplace in India
              where you can find top-rated Pharma companies in India who are
              dealing in PCD Pharma Franchise, monopoly Pharma Franchise, Third
              Party Manufacturing and much more. The idea for launching struck
              our mind in December 2016. This portal is run by a team of
              experienced professionals who is serving the pharmaceutical
              industry by providing digital solutions for the past 8+ years
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={3} lg={3}>
                <SimpleMenu
                  heading={"Categories"}
                  item1={"PCD/Pharma Frannchise"}
                  item2={"Cosematics"}
                  item3={"Pharma Bussiness"}
                  item4={"Ent Medicine"}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <SimpleMenu
                  heading={"PCD/PHARMA FRANCHISE"}
                  item1={"Deram Frannchise"}
                  item2={"Homopathic Frannchise"}
                  item3={"Ayurvedic Frannchise"}
                  item4={"Allopathic Frannchise"}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <SimpleMenu
                  heading={"Third Party"}
                  item1={"PCD/Pharma Frannchise"}
                  item2={"Homopathic Frannchise"}
                  item3={"Ayurvedic Frannchise"}
                  item4={"Allopathic Frannchise"}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <SimpleMenu
                  heading={"Third Party Manufacturer"}
                  item1={"PCD/Pharma Frannchise"}
                  item2={"Homopathic Frannchise"}
                  item3={"Ayurvedic Frannchise"}
                  item4={"Allopathic Frannchise"}
                />
              </Grid>
            </Grid>

            <Grid container pt={5}>
              <Grid item md={12} xs={12}>
                <Coursal />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Hidden smDown>
          <Stack
            sx={{ pt: 4, pb: 5 }}
            direction="row"
            spacing={1}
            justifyContent="center"
          >
            <Button
              startIcon={<MapsUgcRoundedIcon />}
              style={{ background: "#0c8540", color: "white" }}
              variant="contained"
            >
              Post your demands
            </Button>

            <Button
              startIcon={<SecurityRoundedIcon />}
              style={{ background: "#0c8540", color: "white" }}
              variant="contained"
            >
              Your enquiry is verified
            </Button>

            <Button
              startIcon={<RocketLaunchIcon />}
              style={{ background: "#0c8540", color: "white" }}
              variant="contained"
            >
              Your requirements are sent to right suppliers
            </Button>

            <Button
              startIcon={<ThumbUpAltSharpIcon />}
              style={{ background: "#0c8540", color: "white" }}
              variant="contained"
            >
              Suppliers will contact you
            </Button>
          </Stack>
        </Hidden>

        {/* </Box> */}

        <Container
          component={Paper}
          sx={{
            pt: 5,
            pb: 6,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            style={{ color: "#0c8540" }}
          >
            PCD/PHARMA FRANCHISE
          </Typography>
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "0.25%",
              maxWidth: 1520,
              maxHeight: 500,
            }}
            image={PcdPharma}
            alt="random"
          />
        </Container>

        <Container sx={{ py: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
                heading={"Ophthalmic Pharma Franchise "}
                body={
                  "India is a home for approximately world’s 30% blind people. Half among these people are blind due to cataracts and others "
                }
                image={Ophthalmic}
              />
            </Grid>
          </Grid>
        </Container>

        <Container
          component={Paper}
          sx={{
            pt: 5,
            pb: 6,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            style={{ color: "#0c8540" }}
          >
            THIRD PARTY MANUFACTURING
          </Typography>
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

        <Container sx={{ py: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
                heading={"Derma Manufacturer"}
                body={
                  " The form -derma is specifically used to name skin disorders and is used in many medical terms, especially in pathology. It ultimately comes from the Greek dérma, meaning “skin.The form -derma is specifically used to name skin disorders and is used. "
                }
                image={Derma}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
                heading={"Injection Manufacturer "}
                body={
                  "Injection Molding: Injection Molding is a manufacturing process for producing parts in large volume. It is most typically used in mass-production processes where the same part is being created thousands or even millions of times in succession.a"
                }
                image={Injection}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
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
                style={{ height: "    230px" }}
                heading={"Contract Manufacturer"}
                body={
                  "Pharmaceutical contract manufacturing process involves Pharmaceutical machinery, drug manufacturers contracting a firm for finished products or components. It can be seen as a type of outsourcing and outcoming.  "
                }
                image={Contract}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
                heading={"Hand Wash Manufacturers"}
                body={
                  "It is preferably used to wash clothes and kitchen utensils, but it is also widely used to wash hands and the body. Would you like to learn how to make liquid soap at home? "
                }
                image={HandWash}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
                heading={"Hand Sanitizer Manufacturer "}
                body={
                  "Hand sanitizer (also known as hand antiseptic, hand disinfectant, hand rub, or handrub) is a liquid, gel or foam generally used to kill many viruses/bacteria on the hands. "
                }
                image={HandSanitizer}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
                heading={"Ophthalmic Pharma Franchise "}
                body={
                  "India is a home for approximately world’s 30% blind people. Half among these people are blind due to cataracts and others are suffering from glaucoma ."
                }
                image={Ophthalmic}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px" }}
                heading={"Ophthalmic Pharma Franchise "}
                body={
                  "India is a home for approximately world’s 30% blind people. Half among these people are blind due to cataracts and others are suffering from glaucoma ."
                }
                image={Ophthalmic}
              />
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ pt: 5, mb: 5, pb: 3 }} component={Paper}>
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
                <BasicPopover style={{ marginLeft: "470px" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container
          component={Paper}
          sx={{
            pt: 5,
            pb: 6,
          }}
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

        <Container sx={{ py: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
              <Video />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Video />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
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
