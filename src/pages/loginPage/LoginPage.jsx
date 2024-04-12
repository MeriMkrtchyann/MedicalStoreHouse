import * as React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from '../../components/login/Login';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase/firebase"
import readUserData from "../../services/users/firebaseGet"
import { useTranslation } from 'react-i18next';
import readAdminData from '../../services/admins/firebaseGet';

export default function LoginPage({setActiveUser, setAdmin}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [color , setColor] = React.useState('white');
  const [errorText , setErrorText] = React.useState("errorText")
  const navigate  = useNavigate() 
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      const isAdmin = await readAdminData(email)
      console.log(isAdmin)
      const user = userCredential.user;
      console.log(user)
      if (isAdmin ){
        setAdmin(isAdmin)
        navigate("/admin")
        return
      }else if(user.emailVerified) {
          const activUser = await readUserData(email);
          console.log(activUser)
          setActiveUser(activUser)
          setAdmin(null)
          navigate("/");
      }else {
        setErrorText(t('verificationError'));
        setColor("red");
      }
    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorText(t("validLoginAndPasswordError"))
        setColor("red")
    };
};

return (
   <Login handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} color={color} errorText={errorText} />
  );
}