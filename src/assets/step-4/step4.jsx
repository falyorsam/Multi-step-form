const Step4 = ({ BackGround, values, DescBc, funcy }) => {
  window.addEventListener("resize", () => {
    funcy();
  });
  return (
    <div className="step4">
      <div className="personalInfo">
        <div className="tiltleText"></div>
        <div className="underText"></div>

        <div className="theSub">
          <div className="colorIt">
            <div className="typeOfSub">
              <div className="bigText-1">text big</div>
              <div className="smallText-1">text small</div>
            </div>
            <div className="additionalPay">
              <div className="additional">
                <div className="texty">texty</div>
                <div className="pricePayed">9$</div>
              </div>
              <div className="additional">
                <div className="texty">texty</div>
                <div className="pricePayed">9$</div>
              </div>
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
        <div className="GoBack nextStep">GO Back</div>
        <div className="nextStep">Next Step</div>
      </div>
    </div>
  );
};
export default Step4;
