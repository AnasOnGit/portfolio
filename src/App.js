import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Git from "./components/Git";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Apps from "./components/Apps";
import Footer from "./components/Footer";
import LanguagesGallery from "./components/Languages";
import myPicture from "./assets/pic.jpg";
import DataAnalysis from "./components/DataAnalysis";

export const myPic = myPicture;
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Banner text="Keep learning." />
        <AboutMe />
        <Resume />
        <div className="git-links-container" id="github">
          <h3 className="heading-text">Github</h3>
          <div className="git-links">
            <Git url="https://github.com/AnasOnGit" title="Public" />
            <Git url="https://github.com/SyedAnasIkhlas" title="Private" />
          </div>
        </div>
        <Projects />
        <Apps />
        <DataAnalysis />
        <LanguagesGallery />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
