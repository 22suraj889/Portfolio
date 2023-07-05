import React from "react";
import Style from "./ExperienceContent.module.css";
import HatIcon from "../../../svg/HatIcon";
const ExperienceContent = ({ exInfo }) => {
  return (
    <div className={Style["experience_info"]}>
      <div className={Style["hat_icon"]}>
        <HatIcon />
      </div>
      <h2 className={Style["experience_info__company"]}>{exInfo.company}</h2>
      <div className={Style["experience_info__title"]}>
        <h3>{exInfo.title}</h3>
      </div>
      <p>{exInfo.date}</p>
      <div className={Style["experience_info__place"]}>
        <p>{exInfo.location}</p>
      </div>
      <div className={Style["experience_info__skills"]}>
        <p>{exInfo.skills}</p>
      </div>
    </div>
  );
};

export default ExperienceContent;
