import React from "react";
import PhotoGallery from "../components/PhotoGallery";

import Differential from "../components/Differential";
import ContentAbout from "../components/ContentAbout";
import ContentInfo from "../components/contentInfo";

const PageAboutUs = () => {
  return (
    <>
      <div
        style={{
          height: "80px",
          backgroundColor: "#ff533d",
        }}
      ></div>
      <ContentAbout />
      <PhotoGallery />
      <Differential />
      <ContentInfo />
    </>
  );
};

export default PageAboutUs;
