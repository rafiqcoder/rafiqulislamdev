import { motion } from 'framer-motion';
import React from 'react';
import logo from "../../assets/img/logo.png";
import '../../assets/css/style.css';


const Header = () => {
    return (
      <section id="menuBar" className="menu_bar">
        <nav className="navbar">
          <a href="#home" className="logo">
            <motion.img
              initial={{ marginTop: 200 }}
              animate={{ y: 100, marginTop: 0 }}
              transition={{ duration: 1 }}
            />
            <img src={logo} alt />
          </a>
          <ul className="menu">
            <li className="list_item active">
              {" "}
              <a href="#home">
                <i className="fa-duotone fa-house" />
                Home
              </a>
            </li>
            <li className="list_item">
              <a href="#">About Me</a>
            </li>
            <li className="list_item">
              <a href="#">Portfoli</a>
            </li>
            <li className="list_item">
              <a href="#">Resume</a>
            </li>
            <li className="list_item">
              <a href="#">Service</a>
            </li>
            <li className="list_item">
              <a href="#">Blog</a>
            </li>
            <li className="list_item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    );
};

export default Header;