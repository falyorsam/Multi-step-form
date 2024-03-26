const Step3 = ({
  BackGround,
  values,
  DescBc,
  funcy,
  handleNextClick,
  handleCheck,
}) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  return (
    <div className="step3">
      <div className="personalInfo">
        <div className="tiltleText">Pick add-ons</div>
        <div className="underText">
          add-ons help enhance your gaming experience
        </div>
        <form action="submit">
          <label htmlFor="OnlineService">
            <div className="textOfAddOnes">
              {" "}
              <input id="firstCheck" onClick={handleCheck} type="checkbox" />
              <div>
                <div className="bigText">big text</div>
                <div className="smallText">small txt</div>
              </div>
            </div>
            <div className="priceOfAddOnes">9$</div>
          </label>
          <label htmlFor="LargerStorage">
            <div className="textOfAddOnes">
              {" "}
              <input id="secCheck" onClick={handleCheck} type="checkbox" />
              <div>
                <div className="bigText">big text</div>
                <div className="smallText">small txt</div>
              </div>
            </div>
            <div className="priceOfAddOnes">9$</div>
          </label>
          <label htmlFor="CustomizableProfile">
            <div className="textOfAddOnes">
              {" "}
              <input
                id="thCheck"
                onClick={handleCheck}
                type="checkbox"
                className="checkBoxChange"
              />
              <div>
                <div className="bigText">big text</div>
                <div className="smallText">small txt</div>
              </div>
            </div>
            <div className="priceOfAddOnes">9$</div>
          </label>
        </form>
      </div>
      <div className="backse">{values ? <DescBc /> : <BackGround />}</div>
      <div className="center"></div>
      <div className="footer">
        <div
          onClick={() => {
            handleNextClick(20);
          }}
          className="GoBack nextStep"
        >
          GO Back
        </div>
        <div
          onClick={() => {
            handleNextClick(60);
          }}
          className="nextStep"
        >
          Next Step
        </div>
      </div>
    </div>
  );
};
export default Step3;
