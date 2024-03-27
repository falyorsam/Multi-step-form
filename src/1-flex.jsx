import { BGSideBarMobile } from "./assets/images/bg-sidebar-mobile";
import { IconTy } from "./assets/images/icon-thank-you";
import React, { useEffect, useState } from "react";
const Flex = ({ BackGround, values, DescBc, funcy }) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  return (
    <div className="confirm">
      <div className="personalInfo">
        <div className="yesIcon">
          <div className="yes">
            <IconTy />
          </div>
        </div>
        <div style={{ fontWeight: "600" }} className="textCenter">
          thank you{" "}
        </div>

        <div className="textOfThanks">
          <div>
            thanks for confirming your subscription we hope you have fun using
            our platform . if you even need support please feel free to email us
            at support@loremgaming.com
          </div>
        </div>
      </div>
      <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
      <div className="center centerG"></div>
    </div>
  );
};
export default Flex;
