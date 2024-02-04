import React from "react";
import javaScript from "../../../assets/icons/JavaScript.png";
import typescript from "../../../assets/icons/Typescript.png";
import mongoose from "../../../assets/icons/mongoose.png";
import nextjs from "../../../assets/icons/nextjs.png";
import node from "../../../assets/icons/node.png";
import reactIcon from "../../../assets/icons/react.png";
import styles from "./SkillSpinner.module.css";
const SkillSpinner = () => {
  return (
    <div>
      <div className="absolute top-0 -right-[0px]">
        <span
          className={`border border-gray-400 w-[650px] h-[650px]  rounded-full absolute right-[-300px] top-0 ${styles.roundAnimation3} opacity-[.7] `}
        >
          <img
            src={javaScript}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[150px] -bottom-5 hover:scale-125 "
          />
          <img
            src={typescript}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute right-[50px] bottom-12 hover:scale-125"
          />
          <img
            src={mongoose}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[-40px] bottom-[50%] hover:scale-125"
          />
          <img
            src={nextjs}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute right-[60px] bottom-[80%] hover:scale-125"
          />
          <img
            src={node}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[150px] bottom-[95%] bg-green-800 hover:scale-125"
          />
        </span>
        <span
          className={`border border-gray-400 w-[550px] h-[550px]  rounded-full absolute right-[-300px] top-[60px] ${styles.roundAnimation2} opacity-[.7]`}
        >
          <img
            src={reactIcon}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[80px] bottom-0"
          />
          <img
            src={javaScript}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[-40px] bottom-[45%]"
          />

          <img
            src={node}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute right-[40px] bottom-[10%] bg-green-800"
          />
          <img
            src={nextjs}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[100px] bottom-[92%]"
          />
          <img
            src={reactIcon}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute right-[40px] bottom-[85%]"
          />
        </span>
        <span
          className={`border border-gray-400 w-[450px] h-[450px]  rounded-full absolute right-[-300px] top-[100px] ${styles.roundAnimation} opacity-[.7]`}
        >
          <img
            src={reactIcon}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[140px] -bottom-8"
          />
          <img
            src={node}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[-40px] bottom-[35%] bg-green-800"
          />
          <img
            src={typescript}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute left-[80px] bottom-[85%]"
          />
          <img
            src={reactIcon}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute right-[60px] bottom-[85%]"
          />
          <img
            src={nextjs}
            alt=""
            className="w-[50px] h-[50px] rounded-full absolute right-[-10px] bottom-[15%]"
          />
        </span>
      </div>
    </div>
  );
};

export default SkillSpinner;
