import { useEffect, useState } from 'react';
import "./PaymentForm.css"

export default function PaymentForm({ sum,  years, manths, byeProduct, setError }){

  const [cardNumber , setCardNumber] = useState("")
  const [cardNumberError , setCardNumberError] = useState(false)
  const [cardNameAndSurname , setCardNameAndSurname] = useState("")
  const [cardNameAndSurnameError , setCardNameAndSurnameError] = useState(false)
  const [cvcNumber , setCvcNumber] = useState("")
  const [cvcNumberError , setCvcNumberError] = useState(false)
  const [cardYear , setCardYear] = useState("")
  const [cardMonth , setCardMonth] = useState("")

  if (!cvcNumber || !cardNumber || !cvcNumber ){
    setError(true)
  }

  const handleCardNumberChange = (event) => {
    const inputNumber = event.target.value.replace(/\D/g, '')
    if (inputNumber.length <= 16) {
      setCardNumber(inputNumber);
      setCardNumberError(true);
      setError(true)
    } else {
      setCardNumberError(false);
      setError(false)
    }
  }

  const handleCardNameAndSurnameChange = (event) => {
    const inputNameAndSurname = event.target.value;
    const regex = /^[A-Za-z\s]+$/;
    if (!inputNameAndSurname){
      setCardNameAndSurname("");
    }
    if (!regex.test(inputNameAndSurname)) {
      setCardNameAndSurnameError(true);
      setError(true)
      return;
    }
    setCardNameAndSurnameError(false);
    setError(false)
    setCardNameAndSurname(inputNameAndSurname);
  }

  const handleChangeCvcNumber = (event) => {
      const inputCvcNumber = event.target.value;
      const regex = /^\d{3}$/;
      if (regex.test(inputCvcNumber)) {
        setCvcNumberError(false);
        setError(false)
      } else {
        setCvcNumberError(true);
        setError(true)
      }
      setCvcNumber(inputCvcNumber);
  }
    
  return (
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
      <input
        type="text"
        name="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      {cardNumberError && <span className="paymentError">Խնդրում եմ մութքագրեք 16 նիշ առանց բացատների</span>}
    </div>
        <div>
          <h3>Ձեր անունը</h3>
          <p> Ինչպես գրված է քարտի վրա (օր MR NAME SURNAME)</p>
          <input 
            type="text" 
            name="cardNameAndSurname" 
            value={cardNameAndSurname} 
            onChange={handleCardNameAndSurnameChange} 
          />
          {cardNameAndSurnameError && <span className="paymentError">Խնդրում եմ մութքագրեք քարտի վրայի անուն անզգանունը</span>}
        </div>
        <div>
          <h3>Քարտի գործողության վերջնաժամկետը</h3>
          <div className="manthAndYear">
            <select id="manth" value={cardMonth} onChange={(event) => setCardMonth(event.target.value)}>
              {manths.map((manth) => (
                <option key={manth} value={manth}>{manth}</option>
              ))}
            </select>
            <select id="year" value={cardYear} onChange={(event) => setCardYear(event.target.value)}>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h3>CVC2/ CVV2 կոդ</h3> 
          <p>Եռանիշ թիվ, որը գտնվում է քարտի հակառակ կողմում</p>
          <input 
            type="text" 
            name="cvcNumber" 
            value={cvcNumber} 
            onChange={handleChangeCvcNumber} 
          />
          {cvcNumberError && <span className="paymentError">Խնդրում եմ մութքագրեք Եռանիշ թիվ, որը գտնվում է քարտի հակառակ կողմում</span>}
        </div>
        <div class="paymentButton" onClick={()=>byeProduct()}>
          <button>ՎՃԱՐԵԼ</button>
        </div>
      </div>
    )
}