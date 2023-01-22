import React, { useRef, useState, useEffect } from "react";
import "./carousel.css";
// import "./scrollList.css";
import { useSwipeable } from "react-swipeable";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

// icons

export const CarouselItem = ({ children, width = "100%", active, disableMarginRight = false }) => {
  const itemRef = useRef(null);

  // console.log(active)
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
        minWidth: width,
        marginTop: active ? "0px" : "50px",
        marginRight: disableMarginRight ? "0px" : "20px",
        // height: "100%",
        // position: "absolute",
        // display:"inline-flex",justifyContent:"center",alignItems:"center",flexDirection:"row"
      }}
    >
      {/* {children} */}
      {React.cloneElement(children)}
    </div>
  );
};

function Carousel({ children, width = "100", sign = "%" }) {
  const { height, width: pageWidth } = useWindowDimensions();

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
    <div className="carousel" onWheel={(event) => {
      // console.log(event)
    }}

    >

      <div
        onClick={() => updateIndex(active - 1)}
        className="carousel-left-arrow"
      >
        <div className="carousel-left-arrow-line-one"></div>
        <div className="carousel-left-arrow-line-two"></div>
        <div className="carousel-left-arrow-line-three"></div>
      </div>
      <div
        className="inner"
        style={{ transform: `translateX(-${pageWidth <= 525 ? active * 100 : active * width}${pageWidth <= 525 ? "%" : sign})` }}
        {...handlers}

      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            width: (width + sign).toString(),
            active: active === index,
          });
        })}
      </div>
      <div onClick={() => updateIndex(active + 1)}
        className="carousel-right-arrow">
        <div className="carousel-right-arrow-line-one"></div>
        <div className="carousel-right-arrow-line-two"></div>
        <div className="carousel-right-arrow-line-three"></div>
      </div>

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


// function Carousel({ children }) {
//     const [active, setActive] = useState(0);
// return(
//   <div className="carousel-container">
//     {
//       children.map(child=>(
// <CarouselItem>
// { child }
// </CarouselItem>

//       ))
//     }
//   </div>
// )

// }

// function CarouselItem({children}){
//   return(
//     <div className="carousel-item-container">
//       {children}
//     </div>
//   )
// }



export default Carousel;
