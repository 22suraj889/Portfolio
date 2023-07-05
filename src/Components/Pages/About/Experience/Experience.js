import React, { useEffect } from "react";
import ExperienceContent from "./ExperienceContent";
import ExperienceData from "./ExperienceData";
import Style from "./Experience.module.css";
import Heading from "../../../UI/Heading";
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Heading>Experience</Heading>
      <div className={Style["experience"]} data-aos="fade-right">
        {ExperienceData.map((exInfo) => (
          <ExperienceContent key={exInfo.id} exInfo={exInfo} />
        ))}
      </div>
    </>
  );
};

export default Experience;
