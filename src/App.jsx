import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Home from "./Routes/Home.jsx";
import HomePage from "./test2.jsx";
import HomePageTwo from "./test3.jsx";
import GolfCourseRegistration from "./Routes/GolfCourseRegistration.jsx";
import About from "./Routes/About.jsx";
import Memberships from "./Routes/Memberships.jsx";

// import About from "./Routes/About.jsx";
// import Footer from "./Components/Footer.jsx";
// import NotFound from "./Routes/NotFound.jsx";
// import Services from "./Routes/Services.jsx";
// import Test from "./Routes/Test.jsx";
// import Contact from "./Routes/Contact.jsx";
// import Events from "./Routes/Events.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="about" element={<About />} />
        <Route index path="Memberships" element={<Memberships />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="secondHomepage" element={<HomePageTwo />} />
        <Route
          path="golfCourseRegistration"
          element={<GolfCourseRegistration />}
        />

        {/* 
        <Route path="services" element={<Services />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="events" element={<Events />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
