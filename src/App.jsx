import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Home from "./Routes/Home.jsx";
import HomePage from "./test2.jsx";
import HomePageTwo from "./test3.jsx";
import GolfCourseRegistration from "./Routes/GolfCourseRegistration.jsx";
import About from "./Routes/About.jsx";
import Memberships from "./Routes/Memberships.jsx";
import GameMode from "./Routes/GameMode.jsx";
import GameSetupWizard from "./test.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="about" element={<About />} />
        <Route index path="memberships" element={<Memberships />} />
        <Route index path="gameMode" element={<GameMode />} />

        <Route
          path="golfCourseRegistration"
          element={<GolfCourseRegistration />}
        />

        {/* test pages */}
        <Route path="gamemodetest" element={<GameSetupWizard />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="secondHomepage" element={<HomePageTwo />} />
      </Routes>
      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
