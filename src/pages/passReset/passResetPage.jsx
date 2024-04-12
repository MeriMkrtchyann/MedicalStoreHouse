import * as React from 'react';
import PassResetForm from '../../components/passReset/PassResetForm.jsx';
import passResetAuthen from "../../services/users/passResetAuthen.js"
import firebaseGet from "../../services/users/firebaseGet.js"
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function PassResetPage() {

  const navigate = useNavigate()
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');
  const [aboutUser , setAboutUser] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('');
  const [canfirmNewPassword, setCanfirmNewPassword] = React.useState('');
  const [color , setColor] = React.useState("white")
  const [errorText , setErrorText] = React.useState('');
  const [modal , setModal] =  React.useState(false)
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      setColor("white")
      setErrorText("")
      let isPassReset = await passResetAuthen(email, aboutUser , canfirmNewPassword, newPassword, setErrorText, setColor)
      if (isPassReset){
        setTimeout(() => {navigate("/signIn")},1000)
      }
    }catch(e){
      console.log(e.message);
    }
  };

  const openModal = async () => {
    const user = await firebaseGet(email)
    setAboutUser(user)
    if (user){
      setColor("white")
      setModal(true)
    }else{
      setErrorText(t("validEmail"))
      setColor("red")
      setModal(false)
      setAboutUser(null)
    }
  }

  return (
    <PassResetForm 
      setEmail={setEmail} 
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      setCanfirmNewPassword={setCanfirmNewPassword}
      handleSubmit={handleSubmit} 
      color={color} 
      errorText={errorText}
      openModal={openModal}
      modal={modal}
      setModal={setModal}
      />
  );
}