import "./footer.css";
import { useState, useEffect } from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

const ICON_SIZE = 32;
export default function Footer() {
  return (
    <footer>
      <div className="social-media-container">
        <div className="connect-title">LET'S CONNECT</div>
        <div className="wrap">
          <a
            target="_blank"
            href="https://www.instagram.com/syedanasikhlas/"
            className="social-media-link"
          >
            <AiFillInstagram
              className="transparent"
              color="var(--dark-white-color)"
              size={ICON_SIZE}
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/anasikhlas01"
            className="social-media-link"
          >
            <AiOutlineTwitter
              className="transparent"
              color="var(--dark-white-color)"
              size={ICON_SIZE}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anas-ikhlas-117a6820a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUxtKMBCG6CArFbjR4kJFm2neSMi4H4fVs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByE6mIN99R5KQydkw39U7Cg%3D%3D"
            className="social-media-link"
          >
            <AiFillLinkedin
              className="transparent"
              color="var(--dark-white-color)"
              size={ICON_SIZE}
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/AnasOnGit"
            className="social-media-link"
          >
            <AiOutlineGithub
              className="transparent"
              color="var(--dark-white-color)"
              size={ICON_SIZE}
            />
          </a>
          <a
            target="_blank"
            href="https://fiverr.com/syedstudioz"
            className="social-media-link"
          >
            <SiFiverr
              className="transparent"
              color="var(--dark-white-color)"
              size={ICON_SIZE}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
