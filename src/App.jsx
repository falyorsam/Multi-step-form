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
  return (
    <ThemeContext.Provider value={mobile}>
      <div className="pages">
        {" "}
        <Step1
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
        />
        <Step2
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
        />
        <Step3
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
        />
        <Step4
          BackGround={BGSideBarMobile}
          values={mobile}
          DescBc={BGSideBar}
          funcy={sick}
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
