import { BGSideBarMobile } from "./assets/images/bg-sidebar-mobile";
import React, { useEffect, useState } from "react";
const Flex = ({ BackGround, values, DescBc, funcy }) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  return (
    <div className="confirm">
      <div className="personalInfo">
        <div className="yesIcon">
          <div className="yes"></div>
        </div>
        <div className="textCenter"> Lorem ipsum </div>

        <div className="textOfThanks">
          <div>
            sed laudantium ratione laborum voluptatum est, voluptatem aut quae
            quas consequuntur quibusdam! Maxime ipsa molestiae sint maiores
          </div>
        </div>
      </div>
      <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
      <div className="center centerG"></div>
    </div>
  );
};
export default Flex;
