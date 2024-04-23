import React from "react";
import { useNavigate } from "react-router-dom";
import BasketShop from "../basketShop/BasketShop";
import basektButton from "../../services/basket/basektButton";
import "./Info.css"

const Info = ({product,activeUser, setBasket, basket, sum, setSum }) => {

  const navigate = useNavigate()
  const { 
          PraductAbout, 
          PraductId, 
          PraductImage, 
          PraductPrice,
  } = product

  const clickBasektButton = (product) => {
    activeUser ? basektButton(product,  setBasket, basket,sum, setSum) : navigate("/signIn")
}


  return (
    <div className="productConteyner">
      <div  className="productImage">
        <img src={PraductImage} alt="Praduct"></img>
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
            <div className="basketAdd" onClick={()=> clickBasektButton(product)} >
              <BasketShop/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

