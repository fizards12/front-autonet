import React from "react";
import chooseDeviceAndEditImage from "./media/page1.png";
export default function GuideSection(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <ol>
        <li>Click on Start Configuration.</li>
        <li>Choose the Building or Floor that you need to edit.</li>
        <li>Enter the data to be update.</li>
        <img className={props.styles["guide-img"]} src={chooseDeviceAndEditImage} alt="View Page" />
        <li>Click on View to check the data.</li>
        <li>Click on Run&Save to update the network.</li>
        <img className={props.styles["guide-img"]} src={chooseDeviceAndEditImage} alt="View Page" />
      </ol>
    </>
  );
}
