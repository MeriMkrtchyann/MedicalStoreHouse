import React from 'react';
import './PaymentPage.css'; 

const PaymentForm = ({sum}) => {

  const years = [];
  const manths = []

  for (let year = 2024; year <= 2034; year++) {
    years.push(year);
  }

  for (let manth = 0; manth <= 12; manth++) {
    manths.push(manth);
  }

  return(
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
          <div className="paymentForm">
            <div>
              <h3>Հաշվի նկարագրություն</h3>
              <p>Medical Store House</p>
            </div>
            <div>
              <h3>Վճարի մեծություն</h3>
              <div className="sum">
                <span>{sum}</span>
              </div>
            </div>
            <div>
              <h3>Ձեր քարտի համարը</h3>
              <p>16 նիշ առանց բացատների</p>
              <input type="text" name="cardNumber"></input>
            </div>
            <div>
              <h3>Ձեր անունը</h3>
              <p>Ինչպես գրված է քարտի վրա (օր MR NAME SURNAME)</p>
              <input type="text" name="cardNumber"></input>
            </div>
            <div>
              <h3>Քարտի գործողության վերջնաժամկետը</h3>
              <div className="manthAndYear">
                <select id="manth">
                  {manths.map((manth) => (
                    <option key={manth} value={manth}>{manth}</option>
                  ))}
                </select>
                <select id="year">
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <h3>CVC2/ CVV2 կոդ</h3> 
              <p>Եռանիշ թիվ, որը գտնվում է քարտի հակառակ կողմում</p>
              <input type="text" name="cvcNumber"></input>
            </div>
            <div class="paymentButton">
              <button>ՎՃԱՐԵԼ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PaymentForm;
