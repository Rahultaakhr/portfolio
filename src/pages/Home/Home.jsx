import React from "react";
import NavBar from "../../components/NavBar";
import HeroSec from "../../components/HeroSec";
import SkillsSection from "../../components/SkillsSection";
import About from "../../components/About";
import WorkSection from "../../components/WorkSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="font-roboto mx-auto w-full h-full relative scroll-smooth" id="home">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-blue-600 to-pink-600 -z-10"></div>

      {/* Optional Overlay for Enhanced Contrast */}
      {/* <div className="absolute inset-0 bg-black/20 -z-10"></div> */}

      {/* Components */}
      <NavBar />
      <HeroSec />
      <About />
      <SkillsSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default Home;
