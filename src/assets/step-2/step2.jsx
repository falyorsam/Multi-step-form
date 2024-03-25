import { IconArcade } from "../images/icon-arcade";
import { IconPro } from "../images/icon-pro";
import { IconAdvance } from "../images/icon-advanced";

const Step2 = ({ BackGround, values, DescBc, funcy }) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  return (
    <div className="step2">
      <div className="personalInfo">
        <div className="tiltleText">Personal info</div>
        <div className="underText">
          please provide your name , email address , and phone number.
        </div>
        <div className="arcade">
          <div className="icon">
            <IconArcade />
          </div>
          <div className="textOF">
            <div>arcade</div>
            <div className="subPrice">$9/mo</div>
          </div>
        </div>
        <div className="advance">
          <div className="icon">
            <IconAdvance />
          </div>
          <div className="textOF">
            <div>arcade</div>
            <div className="subPrice">$9/mo</div>
          </div>
        </div>
        <div className="pro">
          <div className="icon">
            <IconPro />
          </div>
          <div className="textOF">
            <div>arcade</div>
            <div className="subPrice">$9/mo</div>
          </div>
        </div>
        <div className="monthOrYear">
          <div className="month">monthly</div>
          <div className="change">
            <div className="dot"></div>
          </div>
          <div className="year">yearly</div>
        </div>
      </div>
      <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
      <div className="center"></div>
      <div className="footer">
        <div className="GoBack nextStep">GO Back</div>
        <div className="nextStep">Next Step</div>
      </div>
    </div>
  );
};
export default Step2;
