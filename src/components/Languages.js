import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

// icons
import { ReactComponent as RightArrow } from "../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../assets/LeftArrow.svg";

// icons
import jsIcon from "../assets/icons/javascript-icon.png";
import nodeIcon from "../assets/icons/node-icon.png";
import reactIcon from "../assets/icons/react-icon.png";
import reactNativeIcon from "../assets/icons/react-native-icon.jpg";
import htmlIcon from "../assets/icons/html-icon.png";
import cssIcon from "../assets/icons/css-icon.png";
import pythonIcon from "../assets/icons/python-icon.png";
import phpIcon from "../assets/icons/php-icon.png";

export const LanguageItem = ({
  name,
  percentage,
  detail,
  img,
  lang,
  username,
  width,
  color,
}) => {
  return (
    <div
      style={{
        minWidth: width,
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <div
        className="language-item-container"
        // style={{ width: width }}
      >
        <a
          className="language-item-icon"
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}?tab=repositories&q=&type=&language=${lang}&sort=`}
        >
          <img src={img} alt={name} className="language-item-lang-img" />
          <svg
            height="50"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="50"
            data-view-component="true"
            className="language-item-git-img"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <div className="language-item-name">{name}</div>
        <div className="language-item-detail">{detail}</div>
        <div className="language-item-progress-bar-background">
          <div
            className="language-item-progress"
            style={{ width: `${percentage}%`, backgroundColor: color }}
          >
            <div className="language-item-percentage">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Languages({ children }) {
  const [active, setActive] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActive(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(active + 1),
    onSwipedRight: () => updateIndex(active - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  // console.log(children.length);
  return (
    <div className="languages-container">
      <LeftArrow
        onClick={() => updateIndex(active - 1)}
        className="carousel-left-arrow"
      />
      <div
        className="languages-container-inner"
        style={{ transform: `translateX(-${active * 100}%)` }}
        {...handlers}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            width: "100%",
          });
        })}
      </div>
      <RightArrow
        onClick={() => updateIndex(active + 1)}
        className="carousel-right-arrow"
      />
      <div className="carousel-indicator-container">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={
                index === active
                  ? "carousel-indicator active-carousel-indicator"
                  : "carousel-indicator"
              }
              onClick={() => updateIndex(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

const LanguagesGallery = () => {
  return (
    <div className="languages-gallery-container">
      <h3 className="heading-text">Programming Languages</h3>
      <Languages>
        <LanguageItem
          name="Javascript"
          percentage={85}
          detail="Over 4 years of experience in Javascript."
          lang="javascript"
          username="AnasOnGit"
          img={jsIcon}
          color="var(--secondary-yellow-color)"
        />
        <LanguageItem
          name="Node Js"
          percentage={79}
          detail="Over 3 years of experience in NodeJs."
          lang="javascript"
          username="AnasOnGit"
          img={nodeIcon}
          color="var(--default-green-color)"
        />

        <LanguageItem
          name="React"
          percentage={80}
          detail="Over 2-3 years experience in React Js. This website is also made with React Js :)"
          lang="javascript"
          username="AnasOnGit"
          img={reactIcon}
          color="var(--default-blue-color)"
        />
        <LanguageItem
          name="React Native"
          percentage={78}
          detail="Over a year experience in React Native. "
          lang="javascript"
          username="AnasOnGit"
          img={reactNativeIcon}
          color="var(--secondary-yellow-color)"
        />

        <LanguageItem
          name="HTML"
          percentage={95}
          detail="Over 4 years of experience in using HTML."
          lang="html"
          username="AnasOnGit"
          img={htmlIcon}
          color="var(--default-orange-color)"
        />
        <LanguageItem
          name="CSS"
          percentage={80}
          detail="Every styling, carousel and other things on this site are customs made with CSS."
          lang="css"
          username="AnasOnGit"
          img={cssIcon}
          color="var(--default-blue-color)"
        />
        <LanguageItem
          name="Python"
          percentage={70}
          detail="Over 2-3 year experience."
          lang="python"
          username="AnasOnGit"
          img={pythonIcon}
          color="var(--default-red-color)"
        />
        <LanguageItem
          name="PHP"
          percentage={60}
          detail="My first programming language."
          lang="php"
          username="SyedAnasIkhlas"
          img={phpIcon}
          color="var(--default-blue-color)"
        />
      </Languages>
    </div>
  );
};

export default LanguagesGallery;
