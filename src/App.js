import { useState, useEffect } from "react";
import AdminPage from "./pages/adminPage/AdminPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PassResetPage from "./pages/passReset/passResetPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"
import {SignUpPage} from "./pages/signUpPage/SignUpPage"
import Product from "./components/product/Product"
import { Route, Routes } from 'react-router-dom'
import updateUserData from "./services/users/firebaseUpdate";

function App() {

  const [activeUser, setActiveUser] = useState(null);
  const [product ,setProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [admin , setAdmin] = useState(null);
  const [basket, setBasket] = useState([]);
  const [sum , setSum] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    const storedAdmin = localStorage.getItem("activeAdmin");
    if (storedUser) {
      setActiveUser(JSON.parse(storedUser));
    }
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);


  useEffect(() => {
    async function updateBasket () {
      if (activeUser) {
        await updateUserData(activeUser, { basket: basket }, () => {
          console.log('Data updated successfully!');
        });
       }
    }
    updateBasket()
  }, [activeUser, basket]);

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage admin={admin} setAdmin={setAdmin} activeUser={activeUser} activeCategory={activeCategory} setActiveUser={setActiveUser} setAboutPrductData={setProduct} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/>} />
          <Route path="/signIn" element={<LoginPage setActiveUser={setActiveUser} setAdmin={setAdmin} activeUser={activeUser} admin={admin}/>} />
          <Route path="/signUp" element={<SignUpPage activeUser={activeUser}/>}/>
          <Route path="/aboutProduct" element={product ? <Product product={product} activeUser={activeUser} setActiveUser={setActiveUser} setProduct={setProduct} setActiveCategory={setActiveCategory} basket={basket} setBasket={setBasket} sum={sum} setSum={setSum}/> : <NotFoundPage/>}/>
          <Route path="/forgetPassword" element={<PassResetPage/>}/>
          <Route path="/admin" element={admin ? <AdminPage setAdmin={setAdmin}/> : <NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
