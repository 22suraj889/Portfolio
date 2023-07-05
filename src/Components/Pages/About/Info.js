import React, { useContext } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import AppContext from "../../../Context/AppContext";
import Style from "./Info.module.css";
const Info = () => {
  const { action } = useContext(AppContext);
  const writerStyle = {
    color: "white",
    fontSize: "1.1rem",
    margin: "14px 16px 10px 36px",
    fontWeight: "600",
    whiteSpace: "pre-line",
  };
  return (
    <div className={Style["info"]}>
      <TypeWriterEffect
        textStyle={
          action.darkMode
            ? writerStyle
            : { ...writerStyle, color: "black", margin: "14px 0px 10px 36px" }
        }
        startDelay={900}
        cursorColor="blue"
        multiText={[
          "Hi, my name is Suraj Poddar. I'm a FullStack Developer, worked as a Software Developer Intern for more than 10 months . \n I live in Prayagraj City, and I'm currently a final year student pursuing Bachelor's degree in Computer Science and Engineering from Kalinga Institute of Industrial Technology, Bhubaneswar.",
        ]}
        nextTextDelay={1000}
        typeSpeed={20}
      />
    </div>
  );
};

export default Info;
