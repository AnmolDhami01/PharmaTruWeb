import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

import Navbar1 from "./components/Navbar1";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import SignIn from "./components/SignIn";

import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import AntibioticsAntibacterial from "./components/SidebarComponents/AntibioticsAntibacterial";
import GeneralMedicines from "./components/SidebarComponents/GeneralMedicines";
import HeartCardiac from "./components/SidebarComponents/HeartCardiac";
import HerbalAyurvedic from "./components/SidebarComponents/HerbalAyurvedic";
import Injectables from "./components/SidebarComponents/Injectables";
import LiverProductes from "./components/SidebarComponents/LiverProductes";
import Syrups from "./components/SidebarComponents/Syrups";
import Dermatology from "./components/SidebarComponents/Dermatology";
import Otolaryngology from "./components/SidebarComponents/Otolaryngology";
import ErrorPage from "./components/ErrorPage";
import ContactUs2 from "./components/ContactUs2";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Coursal from "./components/Coursal";
import { Container, Hidden } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import Sidebar from "./components/Sidebar";
import SimpleMenu from "./components/SimpleMenu";
import { Box } from "@mui/system";
import Collapse from "./components/Collapser";
import Collapser from "./components/Collapser";

import SidebarTesting from "./components/SidebarTesting";
import Caursal from "./components/Caursal";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1300px",
    },
  },
}));
function App() {
  // const classes = useStyles();
  return (
    <div className="Poppins_font">
      <Hidden smUp>
        <NavbarMobile />
      </Hidden>
      <Hidden smDown>
        <Navbar />
      </Hidden>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/contactus" element={<ContactUs2 />}></Route>
        <Route
          path="/antibiotics"
          element={<AntibioticsAntibacterial />}
        ></Route>
        <Route path="/gernalMedicines" element={<GeneralMedicines />}></Route>
        <Route path="/heartCardiac" element={<HeartCardiac />}></Route>
        <Route path="/herbalAyurvedic" element={<HerbalAyurvedic />}></Route>
        <Route path="/injectables" element={<Injectables />}></Route>
        <Route path="/liverProductes" element={<LiverProductes />}></Route>
        <Route path="/syrups" element={<Syrups />}></Route>
        <Route path="/dermatology" element={<Dermatology />}></Route>
        <Route path="/otolaryngology" element={<Otolaryngology />}></Route>
        <Route path="/change" element={<SimpleMenu />}></Route>
        <Route path="/active" element={<Caursal />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
