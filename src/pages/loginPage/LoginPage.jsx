import * as React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from '../../components/login/Login';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase/firebase"
import readUserData from "../../services/users/firebaseGet"
import { useTranslation } from 'react-i18next';
import readAdminData from '../../services/admins/firebaseGet';

export default function LoginPage({ setActiveUser, setBaske, setAdmin, email, setEmail }) {
  const [password, setPassword] = React.useState('');
  const [color, setColor] = React.useState('white');
  const [errorText, setErrorText] = React.useState("errorText");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const isAdmin = await readAdminData(email);
      setEmail(email)
      const user = userCredential.user;
      if (isAdmin) {
        setAdmin(isAdmin);
        localStorage.setItem("activeAdmin", JSON.stringify(isAdmin));
        navigate("/admin");
        return;
      } else if (user.emailVerified) {
        const activeUser = await readUserData(email);
        setActiveUser(activeUser);
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("activeUserEmail", JSON.stringify(email));
        let updateUserBasket =Object.keys(activeUser).map((value)=> activeUser[value].basket)
        if(updateUserBasket[0]){
          setBaske(updateUserBasket[0])
          localStorage.setItem("basket", JSON.stringify(updateUserBasket[0]));
        }else {
          setBaske({})
          localStorage.setItem("basket", JSON.stringify({}));
        }
        navigate("/");
      } else {
        setErrorText(t('verificationError'));
        setColor("red");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorText(t("validLoginAndPasswordError"));
      setColor("red");
    }
  };

  return (
    <Login handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} color={color} errorText={errorText} />
  );
}
