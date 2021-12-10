import React from "react";
import Git from "./Git";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-left">
        <span>
          <a
            href="https://www.linkedin.com/in/anas-ikhlas-117a6820a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUxtKMBCG6CArFbjR4kJFm2neSMi4H4fVs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByE6mIN99R5KQydkw39U7Cg%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="footer-url"
          >
            Linkedin
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/syedanasikhlas/"
            target="_blank"
            rel="noreferrer"
            className="footer-url"
          >
            Instagram
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            href="https://twitter.com/syedanasikhlas"
            target="_blank"
            className="footer-url"
          >
            Twitter
          </a>
        </span>
      </div>
      <div className="footer-content-center">
        <span>
          <a
            href="https://www.fiverr.com/anasikhlas"
            target="_blank"
            rel="noreferrer"
            className="footer-url"
          >
            Fiverr
          </a>
        </span>
        <span>
          <a
            href="https://www.npmjs.com/~anasikhlas"
            target="_blank"
            rel="noreferrer"
            className="footer-url"
          >
            Npm Package
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            href="https://stackoverflow.com/users/12180380/anas-ikhlas"
            target="_blank"
            className="footer-url"
          >
            Stackoverflow
          </a>
        </span>
      </div>
      <div className="footer-content-right">
        <Git url="https://github.com/AnasOnGit" />
      </div>
    </div>
  );
}

export default Footer;
