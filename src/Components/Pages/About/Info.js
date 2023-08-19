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
          "My name is Suraj Poddar, and I hail from Prayagraj, Uttar Pradesh. Currently, I am a final year student pursuing a B.Tech degree in Computer Science from KIIT University, Bhubaneswar. \nI proudly identify as a FullStack Developer and have garnered valuable experience through my tenure as a Software Developer Intern at CuriousJr., a startup, where I contributed for over 10 months.",
        ]}
        nextTextDelay={1000}
        typeSpeed={20}
      />
    </div>
  );
};

export default Info;
