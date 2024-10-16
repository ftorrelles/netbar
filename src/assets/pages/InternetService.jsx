import React from "react";
import ContentServices from "../components/ContentSevices";
import Differential from "../components/Differential";
import Draw from "../components/draw";

const InternetService = () => {
  return (
    <>
      <div
        style={{
          height: "80px",
          backgroundColor: "#ff533d",
        }}
      ></div>
      <ContentServices />
      <Differential />
      <Draw />
    </>
  );
};

export default InternetService;
