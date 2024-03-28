import { IconArcade } from "../images/icon-arcade";
import { IconPro } from "../images/icon-pro";
import { IconAdvance } from "../images/icon-advanced";

const Step2 = ({
  BackGround,
  values,
  DescBc,
  funcy,
  handleNextClick,
  step2,
  handleStep1ar,
  handleStep1ad,
  handleStep1pro,
  handleStepInfo,
  step2Info,
  step2ValueAr,
  handleYM,
  subYMX,
  steps1,
  steps2,
  steps3,
  steps4,
  subYM,
}) => {
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
        <div
          onClick={() => {
            handleStep1ar();
          }}
          style={step2.ar}
          className="arcade"
        >
          <div className="icon">
            <IconArcade />
          </div>
          <div className="textOF">
            <div>arcade</div>
            <div className="subPrice">
              {subYM ? <div>90$/month</div> : <div>9$/month</div>}
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            handleStep1ad();
          }}
          style={step2.ad}
          className="advance"
        >
          <div className="icon">
            <IconAdvance />
          </div>
          <div className="textOF">
            <div>advance</div>
            <div className="subPrice">
              {subYM ? <div>120$/month</div> : <div>12$/month</div>}
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            handleStep1pro();
          }}
          style={step2.pro}
          className="pro"
        >
          <div className="icon">
            <IconPro />
          </div>
          <div className="textOF">
            <div>arcade</div>
            <div className="subPrice">
              {subYM ? <div>150$/month</div> : <div>15$/month</div>}
            </div>
          </div>
        </div>
        <div className="monthOrYear">
          <div className="month">monthly</div>
          <div
            onClick={() => {
              handleYM();
            }}
            className="change"
          >
            <div style={subYMX} className="dot"></div>
          </div>
          <div className="year">yearly</div>
        </div>
      </div>
      <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
      <div className="center"></div>
      <div className="footer">
        <div
          onClick={() => {
            handleNextClick(0);
            handleStepInfo();
          }}
          className="GoBack nextStep"
        >
          GO Back
        </div>
        <div
          onClick={() => {
            handleStepInfo();
            handleNextClick(40);
          }}
          className="nextStep"
        >
          Next Step
        </div>
      </div>
    </div>
  );
};

export default Step2;
