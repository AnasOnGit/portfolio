import React, { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

// icons
import { ReactComponent as RightArrow } from "../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../assets/LeftArrow.svg";

export const GalleryItem = ({ children, width }) => {
  const itemRef = useRef(null);
  const [childClass, setChildClass] = useState(
    itemRef.current && itemRef.current.firstChild.className
  ); 
  return (
    <div
      className={
        itemRef.current && itemRef.current.firstChild.className === "box resize"
          ? "carousel-item carousel-item-resize"
          : "carousel-item"
      }
      ref={itemRef}
      style={{
        width: width,
        // display:"inline-flex",justifyContent:"center",alignItems:"center",flexDirection:"row"
      }}
    >
      {/* {children} */}
      {React.cloneElement(children)}
    </div>
  );
};

function WindowsGallery({ children }) {
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
  // console.log(children);
  // console.log(active);
  return (
    <div className="carousel" onWheel={() => {}}>
      <LeftArrow
        onClick={() => updateIndex(active - 1)}
        className="carousel-left-arrow"
      />
      <div
        className="inner"
        style={{ transform: `translateX(-${active * 100}%)` }}
        {...handlers}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
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

export default WindowsGallery;
