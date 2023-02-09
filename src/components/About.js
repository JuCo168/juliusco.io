import React from "react";
import styles from "../assets/styles";
import { arrowUp } from "../assets";

function About() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">About</span>
          </p>
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
            <span className="text-gradient">Me</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default About