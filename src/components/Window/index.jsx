import { useState } from "react";
import "./window.css";
import { BiWindowAlt } from "react-icons/bi";

const Window = ({ title, url, width,img }) => {
  const [open, setOpen] = useState(false);
  // <div className="window-height">/</div>
  return (
    <div className="window-height">
      <div
        className={`window-container ${open ? "close" : ""}`}
        style={width ? { minWidth: width } : null}
      >
        <div className="window-header">
          <span className="window-header-title" title={title}>
            <BiWindowAlt
              style={{
                margin: "0px 6px",
                // backgroundColor: "red",
                translate: "0px 2px",
              }}
              className="transparent"
              color="var(--dark-white-color)"
              size={19}
            />
            {title}
          </span>
          <div className="flex flex-full transparent justify-end">
            <div
              className={`window-close-btn clickable-div title-hover ${
                open ? "open" : ""
              }`}
              onClick={() => setOpen((prev) => !prev)}
              title="Toggle window"
            >
              <div className="window-close-btn-line-one"></div>
              <div className="window-close-btn-line-two"></div>
              <div className="window-close-btn-line-three"></div>
            </div>
          </div>
        </div>
        <div className="window-body">
          {img ? <img src={img} title={title} /> : <iframe src={url} title={title}></iframe>}
        </div>
        <div className="window-footer">
          <a href={url} target="_blank">Open in new tab</a>
        </div>
      </div>
    </div>
  );
};

export default Window;
