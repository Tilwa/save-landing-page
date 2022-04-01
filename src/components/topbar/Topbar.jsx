import React from "react";
import "./topbar.css";

const myFunction = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
const Topbar = () => {
  return (
    <div className="topbar">
      <div class="topnav" id="myTopnav">
        <a href="https://fasbazar.com/" class="active">
          Fasbazar
        </a>
        <a href="https://fasbazar.com/product-category/electronics/">
          Electronics
        </a>
        <a href="https://fasbazar.com/product-category/fashion/">Fashion</a>
        <a href="https://fasbazar.com/product-category/home/">Home</a>
        <a href="https://fasbazar.com/product-category/grocery/">Grocery</a>
        <a href="https://fasbazar.com/product-category/health-personal-care/">
          Health
        </a>
        <a href="https://fasbazar.com/product-category/mobile-phones/">
          Mobile Phones
        </a>
        <a href="https://fasbazar.com/product-category/perfumes-cosmetics/">
          Perfumes
        </a>
        <a href="https://fasbazar.com/my-account/">LogIn</a>
        <a href="https://fasbazar.com/my-account/">SignUp</a>

        <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          &#9776;
        </a>
      </div>
    </div>
  );
};

export default Topbar;
