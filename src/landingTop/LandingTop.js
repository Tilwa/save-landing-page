import React from "react";
import "./LandingTop.css";

const LandingTop = () => {
  function URL() {
    window.open("https://fasbazar.com/", "_self");
  }

  return (
    //main

    <div className="landing-page" onClick={URL}>
      <img
        src={require("../assets/1002x538.jpg")}
        alt="Nature"
        className="responsive"
        width="100%"
        height="100%"
      />

      <i class="scroll-up1" id="scroll-up1">
        <img
          src={require("../assets/fasbazar-logo.png")}
          width="15%"
          height="15%"
        />
      </i>

      <i class="scroll-up2" id="scroll-up2">
        <div className="moon" width="15%" height="15%"></div>
      </i>

      <i class="scroll-up3" id="scroll-up3">
        <button
          className="button"
          width="15%"
          height="15%"
          style={{ verticalAlign: "middle" }}
        >
          <span>Login</span>
        </button>
        <button
          className="button"
          width="15%"
          height="15%"
          style={{ verticalAlign: "middle" }}
        >
          <span>Signup</span>
        </button>
      </i>
    </div>
  );
};

export default LandingTop;

{
  /* <div className="logo-moon-timer-btn">
  <div className="logo-moon" onClick={URL}>
    <img className="logo" onClick={URL} src={require("../assets/abc.png")} />
    <div className="moon" onClick={URL}></div>
  </div>

  <div className="timer-buttons">
    <div>1</div>
    <div>2</div>
  </div>
</div>; */
}
