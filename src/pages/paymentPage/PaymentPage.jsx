import React, { useState } from 'react';
import './PaymentPage.css'; 
import PaymentForm from '../../components/payment/PaymentForm';
import firebaseAddOrders from '../../services/basket/firebaseAddOrders';
import removeBasket from '../../services/basket/firebaseDeleteBasket';
import SpringModal from '../../components/modals/Modal';
import { useNavigate } from 'react-router-dom';

export default  function PaymentPage ({sum, basket, activeUser, setSum, setBasket, setOpen}) {
  
  const navigate = useNavigate()
  const [error , setError] = useState(true)
  const [openModal , setOpenModal] = useState(false)
  const years = [];
  const manths = []

  for (let year = 2024; year <= 2034; year++) {
    years.push(year);
  }
  for (let manth = 1; manth <= 12; manth++) {
    manths.push(manth);
  }

  const byeProduct = async () => {
    if (!error){
      Object.keys(basket).map((id) => basket[id].ordered = false)
      await firebaseAddOrders(activeUser , basket)
      setSum(0)
      localStorage.setItem("basketSum", JSON.stringify({sum : 0}));
      setBasket({})
      localStorage.setItem("basket", JSON.stringify(null));
      setOpen(false)
      await removeBasket(activeUser)
      setOpenModal(true)
      setTimeout(() => {
        setOpenModal(false)
        navigate("/")
      },2000)
    }
  }

  return(
    <>
    <div className="paymentPage">
      <div className="paymentPageConteyner">
        <div className="logoAndTime">
          <div className="ameriBankLogo">
            <img src ={process.env.PUBLIC_URL + "img/ameriabank.svg"} alt="logo"/> 
          </div>
          <div className="timeEnded">
            <p>Աշխատանքի ավրտին մնացել է </p>
          </div>
        </div>
        <div className="paymentConteyner">
          <div className="paymentTitle">
            <p>Խնդրում եմ լրացել Ձեր վճարային քարտի տվյալները</p>
          </div>
          <PaymentForm sum={sum} years={years} manths={manths} byeProduct={byeProduct} setError={setError}/>
        </div>
      </div>
    </div>
    <div>
      {openModal && <SpringModal openModal={openModal} modalText={"Ձեր վճարումը հաջողությամբ կատարվել է"} modalTextColor={"green"}/>}
    </div>
    </>
  )
};

