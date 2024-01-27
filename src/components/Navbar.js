import React from "react";
import "../react_stylesheets/navbar.css";
// import propTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div id="navbar_section">
      <nav id="navbar" className={`background-${props.mode}`}>
        <ul id="menu">
          <li className="menu_list">
            <a className={`link home text-${props.mode==="default" ? "dark" : "default"}`} href="/">
              Home
            </a>
          </li>
          <li className="menu_list">
            <a className={`link text-${props.mode==="default" ? "dark" : "default"}`} href="/">
              About
            </a>
          </li>
          <li className="menu_list">
            <a className={`link text-${props.mode==="default" ? "dark" : "default"}`} href="/">
              {props.name}
            </a>
          </li>
        </ul>
        <div id="color_section">
          <button className="color_Btn" value="#493B42" onClick={props.color_chager_btn}>
            <div className="color_box" id="colorBox_1"></div>
          </button>
          <button className="color_Btn" value="#222F1E" onClick={props.color_chager_btn}>
            <div className="color_box" id="colorBox_2"></div>
          </button>
          <button className="color_Btn" value="#2F291C" onClick={props.color_chager_btn}>
            <div className="color_box" id="colorBox_3"></div>
          </button>
          <button className="color_Btn" value="white" onClick={props.color_chager_btn}>
            <div className="color_box" id="colorBox_4"></div>
          </button>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {
//   name: propTypes.string.isRequired
// }

// Navbar.defaultProps = {
//   your_name: "Shinchan"
// }