import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsOpen(false);
      } else if (y < window.scrollY) {
        setIsOpen(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    // console.log(y);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div className={y >= 200 ? "header sticky " : y == 0 ? "header" : "header"}>
      <a href="#home" id="home" className="site-name">
        Anas Ikhlas
        {/* Site Name */}
      </a>
      <Nav navStyle="nav" />
      <div
        className="nav-menu-icons-container"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={
            isOpen ? "nav-menu-icon first open" : "nav-menu-icon first"
          }
        ></div>
        <div
          className={
            isOpen ? "nav-menu-icon second open" : "nav-menu-icon second"
          }
        ></div>
        <div
          className={
            isOpen ? "nav-menu-icon third open" : "nav-menu-icon third"
          }
        ></div>
      </div>
      <Nav
        navStyle={isOpen ? "nav-menu open" : "nav-menu"}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

const Nav = ({ navStyle, setIsOpen }) => {
  return (
    <div className={navStyle}>
      <div className="nav-item">
        <a
          className="nav-link"
          href="#about"
          onClick={() => {
            if (navStyle.includes("nav-menu")) {
              setIsOpen(false);
            }
          }}
        >
          About
        </a>
      </div>
      <div className="nav-item">
        <a
          className="nav-link"
          href="#resume"
          onClick={() => {
            if (navStyle.includes("nav-menu")) {
              setIsOpen(false);
            }
          }}
        >
          Resume
        </a>
      </div>
      <div className="nav-item">
        <a
          className="nav-link"
          href="#github"
          onClick={() => {
            if (navStyle.includes("nav-menu")) {
              setIsOpen(false);
            }
          }}
        >
          GitHub
        </a>
      </div>
      <div className="nav-item">
        <a
          className="nav-link"
          href="#projects"
          onClick={() => {
            if (navStyle.includes("nav-menu")) {
              setIsOpen(false);
            }
          }}
        >
          Projects
        </a>
      </div>
      <div className="nav-item">
        <a
          className="nav-link"
          href="#contact"
          onClick={() => {
            if (navStyle.includes("nav-menu")) {
              setIsOpen(false);
            }
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
export default Header;
