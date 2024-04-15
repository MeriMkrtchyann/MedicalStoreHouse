import { useState } from "react";
import AdminPage from "./pages/adminPage/AdminPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PassResetPage from "./pages/passReset/passResetPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"
import {SignUpPage} from "./pages/signUpPage/SignUpPage"
import Product from "./components/product/Product"
import { Route, Routes } from 'react-router-dom'

function App() {

  const [activeUser, setActiveUser] = useState(null);
  const [aboutProduct ,setAboutPrductData] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [admin , setAdmin] = useState(null);

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage activeUser={activeUser} setActiveUser={setActiveUser} setAboutPrductData={setAboutPrductData} setActiveCategory={setActiveCategory}/>} />
          <Route path="/signIn" element={<LoginPage setActiveUser={setActiveUser} setAdmin={setAdmin} />} />
          <Route path="/signUp" element={<SignUpPage/>}/>
          <Route path="/aboutProduct" element={aboutProduct ? <Product aboutProduct={aboutProduct} activeUser={activeUser} setActiveUser={setActiveUser} setActiveCategory={setActiveCategory}/> : <NotFoundPage/>}/>
          <Route path="/forgetPassword" element={<PassResetPage/>}/>
          <Route path="/admin" element={admin ? <AdminPage setAdmin={setAdmin}/> : <NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
