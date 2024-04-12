import { useState } from "react";
import AdminPage from "./pages/adminPage/AdminPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PassResetPage from "./pages/passReset/passResetPage";
import {SignUpPage} from "./pages/signUpPage/SignUpPage"
import { Route, Routes } from 'react-router-dom'

function App() {

  const [activeUser, setActiveUser] = useState(null)
  ;
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage activeUser={activeUser} setActiveUser={setActiveUser}/>} />
          <Route path="/signIn" element={<LoginPage setActiveUser={setActiveUser} />} />
          <Route path="/signUp" element={<SignUpPage/>}/>
          <Route path="/forgetPassword" element={<PassResetPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </>
  );
}

export default App;
