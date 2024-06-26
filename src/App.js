import { useState, useEffect } from "react";
import AdminPage from "./pages/adminPage/AdminPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PassResetPage from "./pages/passReset/passResetPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"
import {SignUpPage} from "./pages/signUpPage/SignUpPage"
import Product from "./components/product/Product"
import { Route, Routes } from 'react-router-dom'
import PaymentPage from "./pages/paymentPage/PaymentPage";
import DeliveriesPage from "./pages/deliveriesPage/DeliveriesPage";
import readUserData from "./services/users/firebaseGet";

function App() {

  const [email, setEmail] = useState('');
  const [activeUser, setActiveUser] = useState(null);
  const [product ,setProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [admin , setAdmin] = useState(null);
  const [basket, setBasket] = useState([]);
  const [allData , setAllData] = useState({});
  const [sum , setSum] = useState(0);
  const [open, setOpen] = useState(false);
  const [activButtonType , setActivButtonType] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    const storedAdmin = localStorage.getItem("activeAdmin");
    const storedBasket = localStorage.getItem("basket");
    const storedBaketSum = localStorage.getItem("basketSum");
    const storedEmail = localStorage.getItem("activeUserEmail");
    if (storedUser) {
      setActiveUser(JSON.parse(storedUser));
    }
    if (storedBasket){
      setBasket(JSON.parse(storedBasket))
    }
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    if (storedBaketSum){
      const sum =JSON.parse(storedBaketSum).sum
      setSum(sum)
    }
    if (storedEmail) {
      setEmail(JSON.parse(storedEmail))
    }
  },[]);

  useEffect( () => {
    const apdateData = async () => {
      if (email) {
        const activeUser = await readUserData(email);
        setActiveUser(activeUser);
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
      }
    }
    apdateData()
  },[activButtonType])

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage setActivButtonType={setActivButtonType} email={email}  admin={admin} setAdmin={setAdmin} activeUser={activeUser} activeCategory={activeCategory} setActiveUser={setActiveUser} setAboutPrductData={setProduct} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum} setOpen={setOpen} open={open} setAllData={setAllData} allData={allData}/>} />
          <Route path="/signIn" element={<LoginPage setBaske={setBasket}  email={email} setEmail={setEmail} setActiveUser={setActiveUser} setAdmin={setAdmin} activeUser={activeUser} admin={admin}/>} />
          <Route path="/signUp" element={<SignUpPage activeUser={activeUser}/>}/>
          <Route path="/aboutProduct" element={product ? <Product product={product} activeUser={activeUser} setActiveUser={setActiveUser} setProduct={setProduct} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/> : <NotFoundPage/>}/>
          <Route path="/forgetPassword" element={<PassResetPage/>}/>
          <Route path="/admin" element={admin ? <AdminPage admin={admin} setAdmin={setAdmin}/> : <NotFoundPage/>}/>
          <Route path="/payment" element={<PaymentPage sum={sum}  basket={basket} activeUser={activeUser} setSum={setSum} setBasket={setBasket} setOpen={setOpen} />}/>
          <Route path="/deliveriesOrFilter" element={<DeliveriesPage setActivButtonType={setActivButtonType} activButtonType={activButtonType} activeUser={activeUser} setAllData={setAllData} email={email} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum} setOpen={setOpen} open={open}/>}/>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
