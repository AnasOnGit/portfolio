import React from "react";
import {myPic} from "../App";
function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-img-container">
        <img src={myPic} alt="Anas" className="contact-img" />
        <a
          target="_blank"
          rel="noreferrer"
          className="contact-img-linkedin"
          href="https://www.linkedin.com/in/anas-ikhlas-117a6820a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUxtKMBCG6CArFbjR4kJFm2neSMi4H4fVs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByE6mIN99R5KQydkw39U7Cg%3D%3D"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 34 34"
            className="linkdin-logo"
          >
            <title>LinkedIn</title>

            <g>
              <path
                d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      <a className="contact-btn" href="mailto:anasikhlas2001@gmail.com">
        Contact Me
      </a>
    </div>
  );
}

export default Contact;
