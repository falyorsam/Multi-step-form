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
}) => {
  window.addEventListener("resize", () => {
    funcy();
  });
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
      setCheck1("");
    }
  }, [checky1]);
  //
  useEffect(() => {
    if (isCheck2 === JSON.stringify(first2)) {
      setCheck2({
        onlineServices: "larger storage",
        price: 2,
        month: "$/month",
      });
    } else {
      setCheck2("");
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
      setCheck3("");
    }
  }, [checky3]);
  const [set, setIt] = useState([check1s, check2s, check3s]);
  const [allPrice, setAllPrice] = useState();
  useEffect(() => {
    setIt([check1s, check2s, check3s]);
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
              <div className="pricePayed">9$/month</div>
            </div>
            <div className="additionalPay">
              {set.map((e) => {
                console.log(e);
                return (
                  <div key={e.id} className="additional">
                    <div className="texty">
                      {e.onlineServices}
                      {}
                    </div>
                    <div style={{ color: "#0b294b" }} className="pricePayed">
                      {e.price}
                      {e.month}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="total">
            <div className="textTotal">textTotal</div>
            <div className="priceTotal">12$</div>
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
