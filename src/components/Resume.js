import React from "react";
import Box from "./Box";

function Resume() {
  return (
    <div className="resume-container" id="resume">
      <h3 className="heading-text">Resume</h3>
      {/* <iframe
        id="resume"
        title="Resume"
        className="resume"
        src="https://drive.google.com/file/d/1t4T1QW_tUGHxkMuOiNW1QwUFOJ_dfe7k/preview"
        allow="autoplay"
      ></iframe> */}
      <Box
        isURL={true}
        title="Resume"
        content="https://drive.google.com/file/d/1t4T1QW_tUGHxkMuOiNW1QwUFOJ_dfe7k/preview"
        className="resume"
        width="100%"
        // height="600px"
        resizeMode={true}
      />
    </div>
  );
}

export default Resume;
