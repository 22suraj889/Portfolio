import React from "react";
import Style from "./Resume.module.css";
const Resume = () => {
  return (
    <button className={Style["resume_btn"]}>
      <a
        className="button"
        href="https://drive.google.com/file/d/18cKpkrl5AeytDPj3ph1AlYpsaH2OGNQ5/view?usp=drive_link"
        rel="noreferrer"
        target="_blank"
      >
        Resume
      </a>
    </button>
  );
};

export default Resume;
