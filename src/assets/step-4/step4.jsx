import { useEffect, useState } from "react";

const Step4 = ({
  BackGround,
  values,
  DescBc,
  funcy,
  handleNextClick,
  userInfo,
  next,
  checky1,
  checky2,
  checky3,
  steps1,
  steps2,
  steps3,
  steps4,
  subYM,
}) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  ////////////////////////////
  const [my, setMY] = useState(0);

  const typeOfSub = userInfo.sub.type.typeOfSub;
  const yearOrMonth = userInfo.sub.yearOrMonth;
  const boxes = userInfo.boxes;
  const email = userInfo.userinfo.email;
  const userName = userInfo.userinfo.name;
  const number = userInfo.userinfo.number;
  const isCheck1 = JSON.stringify(checky1);
  const isCheck2 = JSON.stringify(checky2);
  const isCheck3 = JSON.stringify(checky3);
  const first1 = { firstCheck: "checked", id: 1 };
  const first2 = { firstCheck: "checked", id: 2 };
  const first3 = { firstCheck: "checked", id: 3 };

  useEffect(() => {
    if (yearOrMonth === true) {
      setMY("yearly");
    } else {
      setMY("monthly");
    }
  }, [next]);

  const [check1s, setCheck1] = useState({
    onlineServices: "",
    price: "",
    month: "",
  });
  const [check2s, setCheck2] = useState({
    onlineServices: "",
    price: "",
    month: "",
  });
  const [check3s, setCheck3] = useState({
    onlineServices: "",
    price: "",
    month: "",
  });

  const [NewBox, setNewBox] = useState([
    { firstCheck: "", id: 1 },
    { firstCheck: "", id: 2 },
    { firstCheck: "", id: 3 },
  ]);

  useEffect(() => {
    if (boxes) {
      setNewBox(boxes);
      /////////////////
    }
  }, [checky1, checky2, checky3, boxes, next]);
  // console.log(NewBox);
  if (check1s) {
  }
  //
  //
  useEffect(() => {
    if (isCheck1 === JSON.stringify(first1)) {
      setCheck1({
        onlineServices: "online services",
        price: 1,
        month: "$/month",
      });
    } else {
      setCheck1({
        price: 0,
      });
    }
  }, [checky1]);
  //
  useEffect(() => {
    if (isCheck2 === JSON.stringify(first2)) {
      setCheck2({
        onlineServices: "larger storage",
        price: 2,
        month: 0,
      });
    } else {
      setCheck2({
        price: 0,
      });
    }
  }, [checky2]);
  //
  useEffect(() => {
    if (isCheck3 === JSON.stringify(first3)) {
      setCheck3({
        onlineServices: "customizable profile",
        price: 2,
        month: "$/month",
      });
    } else {
      setCheck3({
        price: 0,
      });
    }
  }, [checky3]);
  const subs = userInfo.sub;
  ///////////////////////////////
  const [set, setIt] = useState([check1s, check2s, check3s]);
  const [allPrice, setAllPrice] = useState([
    { sub: "", prices: "", months: "" },
  ]);

  // ///////////////////////////////////////////////////
  const [subse, setSubse] = useState({
    prices: 0,
    months: 0,
  });
  const stringSubs = JSON.stringify(subs);
  // ///////////////////////////////////////////////////
  const arMs = { type: { typeOfSub: "Arcade" }, yearOrMonth: false };
  const adMs = { type: { typeOfSub: "advance" }, yearOrMonth: false };

  const proMs = { type: { typeOfSub: "pro" }, yearOrMonth: false };

  ////////////////////
  const arYs = {
    type: { typeOfSub: "Arcade" },
    yearOrMonth: true,
  };

  const adYs = { type: { typeOfSub: "advance" }, yearOrMonth: true };

  const proYs = { type: { typeOfSub: "pro" }, yearOrMonth: true };

  // ///////////////////////////////////////////////////

  useEffect(() => {
    if (stringSubs === JSON.stringify(arMs)) {
      setSubse({ sub: "arcade", prices: 9, months: "$/month" });
    } else if (stringSubs === JSON.stringify(arYs)) {
      setSubse({ sub: "arcade", prices: 90, months: "$/year" });
    } else if (stringSubs === JSON.stringify(adMs)) {
      setSubse({ sub: "advanced", prices: 12, months: "$/month" });
    } else if (stringSubs === JSON.stringify(adYs)) {
      setSubse({ sub: "advanced", prices: 120, months: "$/year" });
    } else if (stringSubs === JSON.stringify(proMs)) {
      setSubse({ sub: "pro", prices: 15, months: "$/month" });
    } else if (stringSubs === JSON.stringify(proYs)) {
      setSubse({ sub: "pro", prices: 150, months: "$/year" });
    }
  }, [subs]);
  useEffect(() => {
    setIt([check1s, check2s, check3s]);
  }, [next]);
  //
  //  const data = [
  //    { one: 1 },
  //    { one: 2 },
  //    { one: 3 },
  //    { one: 4 },
  //    { one: 5 },
  //    { one: 6 },
  //  ];
  //  useEffect(() => {
  //    data.map((e) => {
  //      setValue(value + e.one);
  //    });
  //  }, [next]);
  //   console.log(value);
  useEffect(() => {
    set.map((e) => {
      // console.log();
      // setCheckPrice(checksprice + e.price);
    });
  }, [next, check1s, check2s, check3s]);
  // console.log(checksprice);
  //       setAllPrice(e.price);
  // setAllPrice(subse);
  // }, [next]);
  // console.log(allPrice); console.log(checksprice);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (subYM) {
      setValue(
        check1s.price * 12 +
          check2s.price * 12 +
          check3s.price * 12 +
          subse.prices
      );
    } else {
      setValue(check1s.price + check2s.price + check3s.price + subse.prices);
    }
  }, [next]);

  // console.log(subse.price);
  const [year, setYears] = useState(0);
  useEffect(() => {
    if (subse.months === "$/year") {
      console.log("its a year");
      setYears("$/year");
    } else if (subse.months === "$/month") {
      console.log("its a month");
      setYears("$/month");
    }
  }, [next]);
  return (
    <div className="step4">
      <div className="personalInfo">
        <div className="tiltleText">Finishing up</div>
        <div className="underText">
          double-check everything looks OK before confirming
        </div>

        <div className="theSub">
          <div className="colorIt">
            <div className="typeOfSub">
              <div className="class">
                <div className="bigText-1">
                  {typeOfSub}
                  {`(${my})`}
                </div>
                <div className="smallText-1">change</div>
              </div>
              <div className="pricePayed">
                {subse.prices ? subse.prices : ""}
                {subse.months ? subse.months : ""}
              </div>
            </div>
            <div className="additionalPay">
              {set.map((e) => {
                return (
                  <div key={e.id} className="additional">
                    <div className="texty">
                      {e.onlineServices}
                      {}
                    </div>
                    <div style={{ color: "#0b294b" }} className="pricePayed">
                      {subYM
                        ? e.price
                          ? e.price * 12
                          : ""
                        : e.price
                        ? e.price
                        : ""}

                      {e.price ? year : ""}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="total">
            <div className="textTotal">total</div>
            <div className="priceTotal">
              {value ? value : 0}
              {subse.months}
            </div>
          </div>
        </div>
      </div>
      <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
      <div className="center"></div>
      <div className="footer">
        <div
          onClick={() => {
            handleNextClick(40);
          }}
          className="GoBack nextStep"
        >
          GO Back
        </div>
        <div
          onClick={() => {
            handleNextClick(80);
          }}
          className="nextStep"
        >
          Next Step
        </div>
      </div>
    </div>
  );
};
export default Step4;
