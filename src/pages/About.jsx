import React from "react";
import myPic from "../assets/img/my-pic.jpg";
import reactIcon from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import nextjs from "../assets/icons/nextjs.png";
import mongoose from "../assets/icons/mongoose.png";
import typescript from "../assets/icons/typescript.png";
import javaScript from "../assets/icons/javascript.png";

const About = () => {
  return (
    <section className="about_main flex flex-col" id="about">
      <div className="flex">
        <div className="flex ">
          <div className="about_area ">
            <img
              src={myPic}
              alt="Me"
              className="about_img hoverE rounded-md w-[300px] mr-10 mb-5"
            />
            {
              /* <div className="aboutinfo hoverE  bg-pink-600 p-3 rounded -ml-10 mt-10 mr-10">
              <label htmlFor className="">
                Name
              </label>
              <li className="info_list">Md Rafiqul Islam</li>
              <label htmlFor>Birthday</label>
              <li className="info_list">10/10/1998</li>
              <label htmlFor>Mail</label>
              <li className="info_list">rafiqulislam.dev@gmail.com</li>
              <label htmlFor>Phone</label>
              <li className="info_list">01878693653</li>
              <label htmlFor>Address</label>
              <li className="info_list">Dhaka-1212 ,Bangladesh</li>
              <label htmlFor>Nationality</label>
              <li className="info_list">Bangladeshi</li>
            </div> */
              //blue purple gradient for button with tailwind
              //https://tailwindcss.com/docs/gradient-color-stops
            }
          </div>
        </div>
        <div className=" hoverE w-[500px]">
          <h3 className="ftitle">About Me</h3>
          <h1 className="about_t">Hi, I am a MERN Stack Developer</h1>
          <h3 className="abut_sub">
            A passionate UI/UX Designer and Web Developer.
          </h3>
          <p className="abut_desc">
            Hi! My name is Md Rafiqul Islam. I am UI/UX designer and a fullstack
            developer, and very passisonate and dedicated to my work. With 20
            years experience as a professional graphic designer, I have acquired
            the skills and knowledge necessary to make your project a success.
          </p>
          <button className="abut_btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 rounded-full mt-5 uppercase">
            {" "}
            Download cv{" "}
          </button>
        </div>
      </div>
      <div className="stacks flex gap-5 mt-4">
        <img
          src={javaScript}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
        />
        <img
          src={reactIcon}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
        />
        <img src={node} alt="" className="w-[100px] h-[100px] rounded-full" />
        <img
          src={mongoose}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
        />
        <img src={nextjs} alt="" className="w-[100px] h-[100px] rounded-full" />
        <img
          src={typescript}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
        />
      </div>
    </section>
  );
};

export default About;
