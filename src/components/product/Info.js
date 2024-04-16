import React from "react";
import "./Info.css"
import BasketShop from "../basketShop/BasketShop";
import CountDecInc from "../countDecInc/CountDecInc";

const Info = ({aboutProduct }) => {

  const { 
          PraductAbout, 
          PraductId, 
          PraductImage, 
          PraductPrice,
          PraductQuantity
  } = aboutProduct

  return (
    <div className="productConteyner">
      <div  className="productImage">
        <img src={PraductImage}></img>
      </div>
      <div className="info">
          <h2 className="productName">
            {PraductId}
          </h2>
          <p className="praductAbout">
            {PraductAbout}
          </p>
          <div className="cart">
            <div className="price">
              <h2>
                {PraductPrice}դր
              </h2>
            </div>
            <CountDecInc PraductQuantity={PraductQuantity}/>
            <div className="basketAdd">
              <BasketShop/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

