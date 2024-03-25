import React from "react";
const ThemeContext = React.createContext();
const Step1 = ({ BackGround, values, DescBc, funcy }) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  console.log(values);
  return (
    <ThemeContext.Provider value={values}>
      <div className="step1">
        <div className="personalInfo">
          <div className="tiltleText">Personal info</div>
          <div className="underText">
            please provide your name , email address , and phone number.
          </div>
          <form action="submit">
            {" "}
            <label className="name" htmlFor="name">
              <div>Name</div>
              <input type="text" id="name" placeholder="e.g. Stephen King" />
            </label>
            <label className="email" htmlFor="EmailAddress">
              <div>Email Address</div>
              <input
                type="email"
                id="EmailAddress"
                placeholder="e.g. stephenking@lorem.com"
              />
            </label>
            <label className="number" htmlFor="PhoneNumber">
              <div>Phone Number</div>
              <input
                type="number"
                id="PhoneNumber"
                placeholder="e.g. +1 234 567 890"
              />
            </label>
          </form>
        </div>
        <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
        <div className="center"></div>
        <div className="footer">
          <div className="pushRight"></div>
          <div className="nextStep">Next Step</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default Step1;
