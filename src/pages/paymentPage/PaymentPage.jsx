import React, { useState } from 'react';
import './PaymentPage.css'; 

const PaymentForm = () => {
  return(
    <div className="paymentPage">
      <div className="paymentPageConteyner">
        <div className="logoAndTime">
          <div className="ameriBankLogo">
            <img src ={process.env.PUBLIC_URL + "img/ameriabank.svg"} alt="logo"/> 
          </div>
          <div className="timeEnded">
            <p>Աշխատանքի վարտին մնացել է </p>
          </div>
        </div>
        <div className="paymentConteyner">
          <div className="paymentTitle">
            <p>Խնդրում եմ լրացել Ձեր վճարային քարտի տվյալները</p>
          </div>
          <div className="paymentForm">
            <h3>Հաշվի նկարագրություն</h3>
            <h5>Medical Store House</h5>
            <h3>Վճարի մեծություն</h3>
            <p>100.00 AMD</p>
            <h3>Ձեր քարտի համարը</h3>
            <p>16 նիշ առանց բացատների</p>
            
          </div>
        </div>
      </div>
    </div>
  )
};

export default PaymentForm;
