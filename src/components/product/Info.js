import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";
import React, { useState } from "react";

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
        <h2>
          {PraductId}
        </h2>
        <p>
          {PraductAbout}
        </p>
        <div className="price">
          <h3>
            {PraductPrice}դր
          </h3>
        </div>
      </div>
      <div className="cart">
        <div className="Add">
          <RemoveRounded onClick={countDecrease} className="btn-add" /> 
          {count}
          <AddRounded onClick={countIncrease} className="btn-add" />
        </div>
    </div>

      
    </div>
  );
};

export default Info;

