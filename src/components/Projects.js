import React from "react";
import Box from "./Box";
import WindowsGallery, { GalleryItem } from "./WindowsGallery";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h3 className="heading-text">Projects</h3>
      <div className="project-gallery">
        <WindowsGallery>
          <GalleryItem>
            <Box
              content="https://wishes4u.netlify.app"
              title="Online Wishing Plateform"
              IconName="E wishes"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://tiktoknamegenerator.netlify.app"
              title="TikTok Name Generator"
              IconName="TiktoK"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://youtubenamegenerator.netlify.app"
              title="YouTube Name Generator"
              IconName="YouTube"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://ytvidinfo.netlify.app"
              title="Youtube Video Info"
              IconName="info Gen."
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://tasbeeh.netlify.app"
              title="Tasbeeh Counter"
              IconName="Tasbeeh"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://anasongit.github.io/color_search/"
              title="YouTube Downloader"
              IconName="Downloader"
              isURL={true}
              resizeMode={true}
              width="100%"
            />
          </GalleryItem>
          <GalleryItem>
            <Box
              content="https://yt-codestick-downloader.netlify.app"
              title="YouTube Downloader"
              IconName="Downloader"
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
