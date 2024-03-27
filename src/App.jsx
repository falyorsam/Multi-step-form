import React, { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Step1 from "./assets/step-1/step1.jsx";
import Step2 from "./assets/step-2/step2.jsx";
import Step3 from "./assets/step-3/step3.jsx";
import Step4 from "./assets/step-4/step4.jsx";
import Flex from "./1-flex.jsx";
import { BGSideBar } from "./assets/images/bg-sidebar-desktop.jsx";
import { BGSideBarMobile } from "./assets/images/bg-sidebar-mobile.jsx";
const ThemeContext = React.createContext();
function App() {
  const [mobile, SetDesktop] = useState(false);
  const [step1, setStep1] = useState({ name: "", email: "", number: "" });
  const handleStep1 = (name, email, number) => {
    setStep1({ name: name, email: email, number: number });
  };
  useEffect(() => {
    if (window.innerWidth > 376) {
      SetDesktop(true);
    }
  }, []);
  const sick = () => {
    if (window.innerWidth > 375) {
      SetDesktop(true);
    } else if (window.innerWidth < 375) {
      SetDesktop(false);
    }
  };
  ///////////////////////
  const [next, setNext] = useState({
    transform: "translateX(-0%)",
  });
  const handleNextClick = (ratio) => {
    setNext({
      transform: `translateX(-${ratio}%)`,
    });
  };

  /////////////////////////////////////{ ar: {}, ad: {}, pro: {} }
  const AR = {
    ar: {
      backgroundColor: "#f8f9fe",
      border: "2px solid #7977b3",
    },
    ad: {},
    pro: {},
  };
  const AD = {
    ar: {},
    ad: {
      backgroundColor: "#f8f9fe",
      border: "2px solid #7977b3",
    },
    pro: {},
  };
  const PRO = {
    ar: {},
    ad: {},
    pro: {
      backgroundColor: "#f8f9fe",
      border: "2px solid #7977b3",
    },
  };
  const [step2, setStep2] = useState({ ar: {}, ad: {}, pro: {} });
  const [step2Value, setStep2Value] = useState(false);
  const [step2ValueAr, setStep2ValueAr] = useState(false);
  const [step2ValueAd, setStep2ValueAd] = useState(false);
  const [step2ValuePro, setStep2ValuePro] = useState(false);
  ///////////////
  const [step2Info, setStep2Info] = useState({ typeOfSub: "" });
  ///////////////
  const STringStep2 = JSON.stringify(step2);
  const StringAR = JSON.stringify(AR);
  const StringAD = JSON.stringify(AD);
  const StringPRO = JSON.stringify(PRO);
  // console.log(STringStep2);
  // console.log(StringAD);
  // console.log(StringAR);
  // console.log(StringPRO);
  // if (STringStep2 === StringAD) {
  // }
  const handleAr = () => {
    if (step2ValueAr === false) {
      setStep2ValueAr(false);
      setStep2ValueAd(false);
      setStep2ValuePro(false);

      setStep2({
        ar: {
          backgroundColor: "#f8f9fe",
          border: "2px solid #7977b3",
        },
        ad: {},
        pro: {},
      });
    } else if (step2ValueAr === true) {
      setStep2ValueAr(true);
      setStep2ValueAd(false);
      setStep2ValuePro(false);
      setStep2({ ar: {}, ad: {}, pro: {} });
    }
  };
  const handleadv = () => {
    if (step2ValueAd === false) {
      setStep2ValueAd(true);
      setStep2ValueAr(false);

      setStep2ValuePro(false);
      false;
      setStep2({
        ar: {},
        ad: {
          backgroundColor: "#f8f9fe",
          border: "2px solid #7977b3",
        },
        pro: {},
      });
    } else if (step2ValueAd === true) {
      setStep2ValueAd(false);
      setStep2ValueAr(false);

      setStep2ValuePro(false);
      false;
      setStep2({ ar: {}, ad: {}, pro: {} });
    } ////////////
  };
  const handlepro = () => {
    if (step2ValuePro === false) {
      setStep2ValuePro(true);
      setStep2ValueAd(false);
      setStep2ValueAr(false);

      setStep2({
        ar: {},
        ad: {},
        pro: {
          backgroundColor: "#f8f9fe",
          border: "2px solid #7977b3",
        },
      });
    } else if (step2ValuePro === true) {
      setStep2ValuePro(false);
      setStep2ValueAd(false);
      setStep2ValueAr(false);
      setStep2({ ar: {}, ad: {}, pro: {} });
    } ////////////
  };

  const handleStepInfo = () => {
    console.log("ggg");
    if (STringStep2 === StringAR) {
      setStep2Info({ typeOfSub: "Arcade" });
      console.log(step2Info);
    } else if (STringStep2 === StringAD) {
      setStep2Info({ typeOfSub: "advance" });
      console.log(step2Info);
    } else if (STringStep2 === StringPRO) {
      setStep2Info({ typeOfSub: "pro" });
      console.log(step2Info);
    }
  };

  /////////////////////////////////////
  const [subYM, setSubYM] = useState(false);
  const [subYMX, setSubYMX] = useState({ transform: "translateX(-10px)" });
  const handleYM = () => {
    if (subYM === true) {
      setSubYM(!subYM);
      setSubYMX({
        transform: "translateX(-10px)",
      });
    } else if (subYM === false) {
      console.log("log");
      setSubYM(!subYM);
      setSubYMX({
        transform: "translateX(10px)",
      });
    }
  };
  /////////////////////////////////////
  const [check1, setCheck1] = useState({ firstCheck: "", id: 1 });
  const [check2, setCheck2] = useState({ firstCheck: "", id: 2 });
  const [check3, setCheck3] = useState({ firstCheck: "", id: 3 });
  const [checkBoxs, setCheckBoxs] = useState([check1, check2, check3]);
  // console.log(checkBoxs);
  const handleCheck = (e) => {
    console.log();
    const checkBox = e.currentTarget;
    const label = e.currentTarget.parentElement.parentElement.parentElement;
    const checky1 = label.firstCheck;
    const checky2 = label.secCheck;
    const checky3 = label.thCheck;
    if (checky1.checked) {
      setCheck1({ firstCheck: "checked", id: 1 });
    } else {
      setCheck1({ firstCheck: "notChecked", id: 1 });
    }
    //
    if (checky2.checked) {
      setCheck2({ firstCheck: "checked", id: 2 });
    } else {
      setCheck2({ firstCheck: "notChecked", id: 2 });
    }
    //
    if (checky3.checked) {
      setCheck3({ firstCheck: "checked", id: 3 });
    } else {
      setCheck3({ firstCheck: "notChecked", id: 3 });
    }
    const border = e.currentTarget.parentElement.parentElement;
    if (checkBox.checked) {
      border.style.backgroundColor = "#f8f9fe";
      border.style.border = "2px solid #7977b3";
    } else {
      border.style.backgroundColor = "";
      border.style.border = "1px solid #838383";
    }
  };
  useEffect(() => {
    setCheckBoxs([check1, check2, check3]);
  }, [check1, check2, check3]);

  const [user, setUser] = useState({
    userinfo: "",
    sub: { type: "", yearOrMonth: "" },
    boxes: "",
  });
  useEffect(() => {
    setUser({
      userinfo: step1,
      sub: { type: step2Info, yearOrMonth: subYM },
      boxes: checkBoxs,
    });
  }, [next]);

  /////////////////////////////////////
  return (
    <ThemeContext.Provider value={mobile}>
      <div style={next} className="pages">
        {" "}
        <Step1
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
          handleNextClick={handleNextClick}
          handleStep1={handleStep1}
          step1s={step1}
        />
        <Step2
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
          handleNextClick={handleNextClick}
          step2={step2}
          handleStep1ad={handleadv}
          handleStep1ar={handleAr}
          handleStep1pro={handlepro}
          handleStepInfo={handleStepInfo}
          step2Info={step2Info}
          step2ValueAr={step2ValueAr}
          handleYM={handleYM}
          subYMX={subYMX}
        />
        <Step3
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
          handleNextClick={handleNextClick}
          handleCheck={handleCheck}
        />
        <Step4
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
          handleNextClick={handleNextClick}
          userInfo={user}
          next={next}
          checky1={check1}
          checky2={check2}
          checky3={check3}
        />
        <Flex
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
        />
        {/* <div>
        
        </div>
        <div>
        
        </div>
        <div>
        </div> */}
      </div>

      {/* */}
    </ThemeContext.Provider>
  );
}
export default App;

// function App() {
//   <div>
//     <div style={{ color: "black" }}>hhh</div>

//   </div>;
// }

// export default App;
