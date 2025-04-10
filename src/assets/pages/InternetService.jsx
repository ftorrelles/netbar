import React from "react";
import ContentServices from "../components/ContentSevices";
import Differential from "../components/Differential";
import ContentInfo from "../components/ContentInfo";

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
      <ContentInfo />
    </>
  );
};

export default InternetService;
