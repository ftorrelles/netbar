import React from "react";
import ContentServices from "../components/ContentSevices";
import Differential from "../components/Differential";
import Draw from "../components/draw";
import ContactInfo from "../components/contentInfo";

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
      <ContactInfo />
    </>
  );
};

export default InternetService;
