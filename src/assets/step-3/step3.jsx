const Step3 = ({ BackGround, values, DescBc, funcy }) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  return (
    <div className="step3">
      <div className="personalInfo">
        <div className="tiltleText"></div>
        <div className="underText"></div>
        <form action="submit">
          <label htmlFor="OnlineService">
            <div className="textOfAddOnes">
              {" "}
              <input type="checkbox" />
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
              <input type="checkbox" />
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
              <input type="checkbox" className="checkBoxChange" />
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
        <div className="GoBack nextStep">GO Back</div>
        <div className="nextStep">Next Step</div>
      </div>
    </div>
  );
};
export default Step3;
