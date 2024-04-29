import { useState, useEffect } from "react";
import AdminPage from "./pages/adminPage/AdminPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PassResetPage from "./pages/passReset/passResetPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"
import {SignUpPage} from "./pages/signUpPage/SignUpPage"
import Product from "./components/product/Product"
import { Route, Routes } from 'react-router-dom'

function App() {

  const [email, setEmail] = useState('');
  const [activeUser, setActiveUser] = useState(null);
  const [product ,setProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [admin , setAdmin] = useState(null);
  const [basket, setBasket] = useState([]);
  const [sum , setSum] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    const storedAdmin = localStorage.getItem("activeAdmin");
    const storedBasket = localStorage.getItem("basket");
    const storedBaketSum = localStorage.getItem("basketSum");
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
  },[]);

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage email={email}  admin={admin} setAdmin={setAdmin} activeUser={activeUser} activeCategory={activeCategory} setActiveUser={setActiveUser} setAboutPrductData={setProduct} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/>} />
          <Route path="/signIn" element={<LoginPage setBasket={setBasket}  email={email} setEmail={setEmail} setActiveUser={setActiveUser} setAdmin={setAdmin} activeUser={activeUser} admin={admin}/>} />
          <Route path="/signUp" element={<SignUpPage activeUser={activeUser}/>}/>
          <Route path="/aboutProduct" element={product ? <Product product={product} activeUser={activeUser} setActiveUser={setActiveUser} setProduct={setProduct} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/> : <NotFoundPage/>}/>
          <Route path="/forgetPassword" element={<PassResetPage/>}/>
          <Route path="/admin" element={admin ? <AdminPage setAdmin={setAdmin}/> : <NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
