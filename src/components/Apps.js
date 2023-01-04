import React from "react";
import Box from "./Box";
import WindowsGallery, { GalleryItem } from "./WindowsGallery";

function Projects() {
  return (
    <div className="projects-container" id="apps">
      <h3 className="heading-text">Android Apps</h3>
      <div className="project-gallery">
        <WindowsGallery>
          <GalleryItem>
            <Box
              content="https://play.google.com/store/apps/details?id=com.cardboxstudio.paintthewall"
              title="Paint The Wall - Android Game"
              IconName="Paint The Wall"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://play.google.com/store/apps/details?id=com.cardboxstudio.quran"
              title=" Quran App"
              IconName="Quran"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          
        </WindowsGallery>
        {/* <Box /> */}
      </div>
    </div>
  );
}

export default Projects;
