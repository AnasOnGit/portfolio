import { useState } from "react";
import Section, {
  SectionWithTitle,
  SectionWithTitleAndDescription,
  Spacer,
} from "./components/Section/index";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FaNpm } from "react-icons/fa";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Footer from "./components/Footer/index";
import Window from "./components/Window/index";
import Contact from "./components/Contact/index";
import LanguageCardContainer from "./components/LanguageCard/index";
import Version from "./components/Version/index";
import Carousel, { CarouselItem } from "./components/Carousel/index";
import Projects, { AndroidApps } from "./components/Projects/index";

function App() {
  return (
    <>
      <Header />

      <Section scrollId="bio">
        <Hero />
      </Section>

      <SectionWithTitle scrollId="resume" title="Resume">
        <Window title="Resume.pdf" url={"https://drive.google.com/file/d/1cqbJVHhJ6VGxwNUtV7NMaD29bNi57VKi/preview"}/>
      </SectionWithTitle>
      <SectionWithTitle scrollId="languages" title="Programming Languages">
        <LanguageCardContainer />
      </SectionWithTitle>
      <SectionWithTitle title="Projects" scrollId="projects">
        <Projects />
      </SectionWithTitle>
      <SectionWithTitle title="Apps" scrollId="apps">
        <AndroidApps />
      </SectionWithTitle>
      {/* <Section> */}
      <SectionWithTitleAndDescription
        title="Open Source"
        shortDescription="I have worked on numerous open source projects. These projects are available on Github and NPM."
        scrollId="open-source"
        column={true}
      >
        <div className="logo-grid">
          <a target="_blank" href="https://github.com/AnasOnGit" className="icon-text">
            <AiFillGithub
              className="transparent"
              color="var(--dark-white-color)"
              size={19}
            />
            GitHub
          </a>

          <a target="_blank" href="https://github.com/SyedAnasIkhlas" className="icon-text">
            <AiFillGithub
              className="transparent"
              color="var(--dark-white-color)"
              size={19}
              style={{
                translateX: "5px",
              }}
            />
            GitHub
          </a>
          

          <a target="_blank" href="https://www.npmjs.com/~anasikhlas" className="icon-text">
            <FaNpm
              className="transparent"
              color="var(--dark-white-color)"
              size={20}
              style={{
                translateX: "5px",
              }}
            />
          </a>
          <a target="_blank" href="https://stackoverflow.com/users/12180380/anas-ikhlas" className="icon-text">
            <BsStackOverflow
              className="transparent"
              color="var(--dark-white-color)"
              size={19}
              style={{
                translateX: "5px",
              }}
            />
            Stackoverflow
          </a>
        </div>
      </SectionWithTitleAndDescription>
      <SectionWithTitleAndDescription
        title="Design"
        shortDescription="Additionally, I am interested in creating logos and user interfaces. Here are a few logos that I have created."
        scrollId="design"
        column={true}
        reverse={true}
      >
        <div className="logo-grid">
          <img
            src="https://play-lh.googleusercontent.com/rm894oG1kOiP513dqzswQcMvVDk9BFT0HVLXDB2upS9dlQvslKqFRI53IR_g3JRCv3I=w240-h480-rw"
            alt="logo"
          />
          <img
            src="https://play-lh.googleusercontent.com/NSJbFT4Vfsv8OHRgl2P2NdyjyyNMxuMY2IcY3l8zBshz1uJDg2HbhqrBBuinvWeDqg=w240-h480-rw"
            alt="logo"
          />
          <img
            src="https://play-lh.googleusercontent.com/W90tRv-mb78QQmw0jiY8v9xdp61drhMigkCnWLSJyt3VO6DxYeFuLPLMQqIouuCdbA=w240-h480-rw"
            alt="logo"
          />
          <img
            src="https://play-lh.googleusercontent.com/5u23akXbyUBQIrUdhtyvhgiZrcLq1OdVjixcHZ4TcppC3aOZIJEen72LUIAf_saALg=w240-h480-rw"
            alt="logo"
          />
        </div>
      </SectionWithTitleAndDescription>
      <SectionWithTitleAndDescription
        shortDescription="Some of the tools I use for graphic design work:"
        column={true}
      >
        <div className="logo-grid">
          <img
            src="https://w7.pngwing.com/pngs/431/965/png-transparent-figma-designer-computer-icons-material-design-design-rectangle-poster-logo.png"
            alt="Graphic design tools"
          />
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png"
            alt="Graphic design tools"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
            alt="Graphic design tools"
          />
        </div>
      </SectionWithTitleAndDescription>

      <Spacer />
      <SectionWithTitleAndDescription
        reverse={true}
        title="Previous Versions"
        shortDescription="You can view previous versions of this portfolio website by choosing the version."
        scrollId="previous_versions"
      >
        <Version />
      </SectionWithTitleAndDescription>
      <Spacer />
      <SectionWithTitleAndDescription
        title="Contact Me"
        shortDescription="Have a question, a suggestion, or simply want to say hello? Go ahead."
        scrollId="contact"
        column={true}
      >
        <Contact />
      </SectionWithTitleAndDescription>
      <Footer />
      {/* </Section> */}
    </>
  );
}

export default App;

/* add logos section, ui/ux sectio*/
// show all software for graphic design i use for graphic design
