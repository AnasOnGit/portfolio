import React, { useRef, useState, useEffect } from "react";
import { useWindowSize, trimString } from "../customHooks";

// icon
import resume from "../assets/resume.png";
import { ReactComponent as DocIcon } from "../assets/DocIcon.svg";
import { ReactComponent as LinkIcon } from "../assets/linkIcon.svg";

// components
function Box({
  content,
  iconName,
  title,
  isURL,
  resizeMode,
  className,
  width,
  height,
  minHeight,
}) {
  // console.log(content);
  // ref
  //   states
  const [open, setOpen] = React.useState(true);
  const [closeAnimation, setCloseAnimation] = React.useState(false);
  const [resizeWindow, setResizeWindow] = React.useState(resizeMode || false);
  const [wordsPerLine, setWordsPerLine] = useState(0);

  const windowRef = useRef(null);
  // variables
  let lineNumber = [];
  let contentContainerCss =
    wordsPerLine > 11
      ? resizeWindow
        ? "box resize"
        : "box"
      : resizeWindow
      ? "box resize"
      : "box  sm";

  //   custom hooks
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    if (!isURL || isURL === undefined) {
      handleWindowResize();
    }
  }, [windowWidth]);

  // windowRef.current.onresize(handleWindowResize)
  for (let index = 0; index < wordsPerLine + 1; index++) {
    lineNumber.push(index + 1);
  }

  const handleWindowResize = () => {
    let calWords = Math.round(windowRef.current.offsetWidth / 10); // * 2 in case
    setWordsPerLine(
      Math.round(countTotalWordInPropsElement(content) / calWords) > 2
        ? Math.round(countTotalWordInPropsElement(content) / calWords)
        : 9
    );
    // console.log(countTotalWordInPropsElement(content));
    // if (Math.round(countTotalWordInPropsElement(content) / calWords) > 9) {
    // windowRef.current.style.height = "200px"
    // }
  };

  const handleWindowState = () => {
    setCloseAnimation(true);
    // setOpen(false);
    setTimeout(() => {
      setOpen(false);
      setCloseAnimation(false);
    }, 1000);
  };
  const countTotalWordInPropsElement = (content) => {
    let totalWords = 0;
    if (typeof content === "string") return content.length;
    // console.log(
    //   typeof content.props.children,
    //   content.props.children.length,
    //   content.props.children
    // );
    if (content.props.children.length === undefined)
      return content.props.children.props.children.length;
    console.log(content.props.children);
    content.props.children.forEach((element) => {
      if (typeof element.props.children === "string") {
        totalWords += element.props.children.length;
      } else if (typeof element.props.children === "object") {
        countTotalWordInPropsElement(element);
      }
    });

    return totalWords;
  };

  const countTotalWordIdnPropsElement = (content) => {
    // remove d
    let totalWord = 0;
    // console.log(content);
    console.log(content.props.children.props.children);
    if (typeof content === "string") return content.length;
    if (content.props.children === undefined) {
      countTotalWordInPropsElement(content.props.children);
    }
    content &&
      content.props.children.forEach((element) => {
        totalWord +=
          typeof element === "string"
            ? element.length
            : typeof element.props.children === "object"
            ? countTotalWordInPropsElement(element)
            : element.props.children.length;
      });
    return totalWord;
  };

  if (open) {
    return (
      <div
        className={
          closeAnimation
            ? `${contentContainerCss} close-window`
            : contentContainerCss
        }
        ref={windowRef}
        style={{ width: width }}
      >
        <div className="window-header handle">
          <div className="header-left">
            <DocIcon className="header-icon" />
            <div className="window-name" title={title}>
              {" "}
              {title ? trimString(title, 27) : trimString(title, 27)}{" "}
            </div>
          </div>
          <div className="window-header-center"> </div>
          <div className="window-header-button">
            <button className="mini" onClick={handleWindowState}></button>
            <button
              className="resize-icon"
              onClick={() => setResizeWindow(!resizeWindow)}
            >
              {" "}
            </button>
            <button className="close-icon" onClick={handleWindowState}></button>
          </div>
        </div>

        {!isURL ? (
          // display content inside editor if  content is not url
          <div className="content-window">
            <div className="content-window-number">
              {/* {Math.round(content.length/47)} */}
              {lineNumber.map((index) => (
                <div key={index} className="window-line-num">
                  {index}
                </div>
              ))}
            </div>
            <div className="content-window-line"> </div> {content}
          </div>
        ) : (
          //  display url inside ifram e
          <div className={`content-window iframe `}>
            <iframe
              src={content}
              title={title}
              className="window-iframe"
              allow="autoplay"
            ></iframe>
            <a
              href={content}
              target="_blank"
              rel="noreferrer"
              className="window-iframe-link"
            >
              Visit Site
              <LinkIcon className="window-iframe-link-icon" />
            </a>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div onClick={() => setOpen(true)} className="window-open-button">
        {/* <img src={resume} alt="Window App" /> */}
        <DocIcon className="open-button-icon" />
        <div className="open-button-text">
          {iconName ? trimString(iconName, 9) : trimString(title, 9)}
        </div>
      </div>
    );
  }
}

export default Box;
