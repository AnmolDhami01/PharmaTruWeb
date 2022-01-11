import "./App.css";
import Home from "./components/Home";

import Navbar1 from "./components/Navbar1";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import SignIn from "./components/SignIn";

import SignUp from "./components/SignUp";

import HeartCardiac from "./components/SidebarComponents/HeartCardiac";
import HerbalAyurvedic from "./components/SidebarComponents/HerbalAyurvedic";

import ErrorPage from "./components/ErrorPage";
import ContactUs2 from "./components/ContactUs2";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

import { Hidden } from "@mui/material";

import { makeStyles } from "@mui/styles";

import SimpleMenu from "./components/SimpleMenu";

import HoverLinks from "./components/HoverLinks";
import SidebarTesting1 from "./components/SidebarTesting1";
import SidebarTesting3 from "./components/SidebarTesting3";
import PharmaFranchise from "./components/SidebarComponents/PharmaFranchise";
import ThirdParty from "./components/SidebarComponents/ThirdParty";
import CosmeticsDerma from "./components/SidebarComponents/CosmeticsDerma";
import AyurvedicPCD from "./components/SidebarComponents/AyurvedicPCD";
import AllopathicDrug from "./components/SidebarComponents/AllopathicDrug";
import ENTMedicine from "./components/SidebarComponents/ENTMedicine";
import MedicineManufacturing from "./components/SidebarComponents/MedicineManufacturing";
import PharmaBusiness from "./components/SidebarComponents/PharmaBusiness";
import CardiacDiabatic from "./components/SidebarComponents/CardiacDiabatic";

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

        <Route path="/heartCardiac" element={<HeartCardiac />}></Route>
        <Route path="/herbalAyurvedic" element={<HerbalAyurvedic />}></Route>
        <Route path="/pcdfranchise" element={<PharmaFranchise />}></Route>
        <Route path="/thirdparty" element={<ThirdParty />}></Route>
        <Route path="/cosmetics" element={<CosmeticsDerma />}></Route>
        <Route path="/ayurvedic" element={<AyurvedicPCD />}></Route>
        <Route path="/allopathic" element={<AllopathicDrug />}></Route>
        <Route path="/entmedcine" element={<ENTMedicine />}></Route>
        <Route path="/medicine" element={<MedicineManufacturing />}></Route>
        <Route path="/pharmabusiness" element={<PharmaBusiness />}></Route>
        <Route path="/cardiacDiabtic" element={<CardiacDiabatic />}></Route>

        <Route path="/change" element={<SimpleMenu />}></Route>
        <Route path="/active" element={<HoverLinks />}></Route>
        <Route path="/test" element={<SidebarTesting3 />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
