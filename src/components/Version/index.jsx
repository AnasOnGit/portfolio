import "./version.css";
import { VscVersions } from "react-icons/vsc";
export default function () {
  return (
    <div className="version-container">
      <div className="version-btn">
        <VscVersions
          className="transparent"
          fill="var(--dark-overlay-color)"
          color="var(--dark-white-color)"
          size={19}
        />
        <div className="version-text">Previous Versions</div>
      </div>
      <ul className="version-list">
        <li>
          <a
            href="https://627128da8450d40b00ec1b81--anasikhlas.netlify.app/"
            target="_blank"
          >
            Version 1
          </a>
        </li>
      </ul>
    </div>
  );
}
