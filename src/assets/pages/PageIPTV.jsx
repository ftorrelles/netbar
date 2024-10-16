import React from "react";
import ServiceIPTV from "../components/ServiceIPTV";
import Differential from "../components/Differential";
import Draw from "../components/draw";

const PageIPTV = () => {
  return (
    <>
      <div
        style={{
          height: "80px",
          backgroundColor: "#ff533d",
        }}
      ></div>
      <ServiceIPTV />
      <Draw />
      <Differential />
    </>
  );
};

export default PageIPTV;
