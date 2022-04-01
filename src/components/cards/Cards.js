import React from "react";
import "./Card.css";
import { ProductData } from "../data/ProductsList";
const Cards = () => {
  const data = ProductData;

  const jumpLink = (x) => {
    window.open(x.link, "_self");
  };

  return (
    <>
      <div className="flex">
        {data.map((x) => {
          {
            /* x = Math.floor(Math.random() * 100 + 1); */
          }
          return (
            <div class="product-card" onClick={() => jumpLink(x)}>
              <div class="product-tumb">
                <img src={x.img} alt="" />
              </div>
              <div class="product-details">
                <div className="shape-cart">
                  <div className="shape">
                    <button className="service">Fast Delivery</button>
                  </div>
                </div>

                <div class="product-bottom-details">
                  <div class="product-price">
                    <div className="price-btn">
                      <div className="price">{x.offerPrice} </div>
                      <div className="offer-btn">{x.offer}</div>
                    </div>
                    <br />
                    <div className="old">
                      {" "}
                      <small> {x.oldPrice}</small>
                    </div>
                  </div>
                  <div class="product-links">
                    <a href="">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <br />

                <h4 className="product-title">
                  <a href="">{x.title}</a>
                </h4>
                <div className="last-btns">
                  <p className="clr">Fulfilled By fasbazar</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
