import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";
import React, { useState } from "react";
import "./Info.css"
import BasketShop from "../basketShop/BasketShop";

const Info = ({aboutProduct }) => {

  const [count , setCount] = useState(0)

  const { 
          PraductAbout, 
          PraductId, 
          PraductImage, 
          PraductName,
          PraductPrice,
          PraductQuantity
  } = aboutProduct

  const countIncrease = () => {
      if (count < PraductQuantity){
        setCount(count + 1)
      }
  };

  const countDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

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
            <div className="add">
              <RemoveRounded onClick={countDecrease} className="btn-add" /> 
              <p>{count}</p>
              <AddRounded onClick={countIncrease} className="btn-add" />
            </div>
            <div className="basketAdd">
            <BasketShop/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

