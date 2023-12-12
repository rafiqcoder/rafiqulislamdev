import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaHome } from "react-icons/fa";
import "../../assets/css/style.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);

  const checkMobileDevice = () => {
    if (window.innerWidth <= 768) {
      setMobileDevice(true);
    } else {
      setMobileDevice(false);
    }
  };

  // window.addEventListener('resize',checkMobileDevice);

  useEffect(() => {
    checkMobileDevice();
    if (mobileDevice) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [mobileDevice]);

  return (
    <section id="menuBar" className="menu_bar  ">
      <div
        className="absolute top-10 right-0"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <FaAngleRight className="text-3xl text-white font-bold" />
        ) : (
          <FaAngleLeft className="text-3xl text-white font-bold" />
        )}
      </div>
      <nav className="navbar">
        <a href="#home" className="logo">
          <motion.img
            initial={{ x: -100, marginTop: 100 }}
            animate={{ x: 0, marginTop: 10 }}
            transition={{ duration: 1 }}
            src={logo}
          />
        </a>
        <ul className="menu">
          <li className="list_item active">
            {" "}
            <a href="#home" className="flex gap-2">
              <FaHome className="text-2xl" />
              {!collapsed && <span>Home</span>}
            </a>
          </li>
          <li className="list_item">
            <a href="#about">About Me</a>
          </li>
          <li className="list_item">
            <a href="#">Services</a>
          </li>
          <li className="list_item">
            <a href="#">Projects</a>
          </li>
          <li className="list_item">
            <a href="#">Resume</a>
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
