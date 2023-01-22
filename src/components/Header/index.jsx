import { useState } from "react";
// import { Icon } from '@iconify/react';
import "./header.css";
import { Spacer } from "../Section/index";
import { useSwipeable } from "react-swipeable";

import { CiCircleInfo } from "react-icons/ci";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdUnfoldMore } from "react-icons/md";
import { GrCheckmark } from "react-icons/gr";
import { SiMaterialdesignicons } from "react-icons/si";
import { TbBrandOpenSource } from "react-icons/tb";
import { BsJournalCode, BsCodeSquare } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdAppstore } from "react-icons/io";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handlers = useSwipeable({
    onSwipedUp: () => setOpen(false),

    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <>
      <Spacer half={true} />
      <header className="header">
        <h1 className="brand-name-header">Anas Ikhlas</h1>
        <div className="flex full-flex justify-end ">
          <ResponsiveMenuIcon open={open} setOpen={setOpen} />
        </div>
        <div
          {...handlers}
          className={`nav-close-trigger ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        ></div>
        <Nav open={open} setOpen={setOpen} />
      </header>
    </>
  );
};

export default Header;

const ResponsiveMenuIcon = ({ open, setOpen }) => {
  return (
    <div
      className={`clickable-div responsive-menu-icon ${open ? "open" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="clickable-div menu-icon-line line-one"></div>
      <div className="clickable-div menu-icon-line line-two"></div>
      <div className="clickable-div menu-icon-line line-three"></div>
    </div>
  );
};

const Nav = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(false);
    setExpandList(false);
  };
  const [expandList, setExpandList] = useState(false);
  return (
    <nav className={`${open ? "open" : ""}`}>
      <ul className="nav-options">
        <li onClick={() => closeMenu()} className=" nav-options-li">
          <CiCircleInfo
            className="transparent"
            color="var(--dark-white-color)"
            size={19}
          />
          <a href="#bio">BIO</a>
        </li>
        <li onClick={() => closeMenu()} className=" nav-options-li">
          <CgLoadbarDoc
            className="transparent"
            color="var(--dark-white-color)"
            size={19}
          />
          <a href="#resume">RESUME</a>
        </li>
        <li
          // onClick={() => closeMenu()}
          className="nav-more-option-btn nav-options-li"
        >
          <div
            className="flex nav-more-btn-group"
            onClick={() => {
              setExpandList((prev) => !prev);
            }}
          >
            <MdUnfoldMore
              className="transparent"
              color="var(--dark-white-color)"
              size={19}
            />
            MORE
          </div>
          <ul
            className={`more-option clickable-div ${
              expandList ? "expand" : ""
            } `}
          >
            <li onClick={() => closeMenu()}>
              <BsCodeSquare
                className="transparent"
                color="var(--dark-white-color)"
                size={19}
              />
              <a href="#languages">Programming Languages</a>
            </li>
            <li onClick={() => closeMenu()}>
              <BsJournalCode
                className="transparent"
                color="var(--dark-white-color)"
                size={19}
              />
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => closeMenu()}>
              <IoMdAppstore
                className="transparent"
                color="var(--dark-white-color)"
                size={19}
              />
              <a href="#apps">Apps</a>
            </li>
            <li onClick={() => closeMenu()}>
              <SiMaterialdesignicons
                className="transparent"
                color="var(--dark-white-color)"
                size={19}
              />
              <a href="#design">Graphic Design</a>
            </li>
            <li onClick={() => closeMenu()}>
              <TbBrandOpenSource
                className="transparent"
                color="var(--dark-white-color)"
                size={19}
              />
              <a href="#open-source">Open Source</a>
            </li>
          </ul>
        </li>
        <li onClick={() => closeMenu()} className=" nav-options-li">
          <BiMessageDetail
            className="transparent"
            color="var(--dark-white-color)"
            size={19}
          />
          <a href="#contact">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};

const NacvItem = ({ onClick, className, icon }) => {
  return (
    <li onClick={onClick} className={className}>
      {icon}
      <a href="#bio">BIO</a>
    </li>
  );
};
