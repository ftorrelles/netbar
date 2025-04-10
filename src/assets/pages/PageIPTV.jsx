import React from "react";
import ServiceIPTV from "../components/ServiceIPTV";
import DownloadIPTV from "../components/DownloadIPTV";
import ContentInfo from "../components/ContentInfo";

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
      <DownloadIPTV />
      <ContentInfo />
    </>
  );
};

export default PageIPTV;
