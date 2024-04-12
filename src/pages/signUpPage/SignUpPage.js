import * as React from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import { Registraion } from '../../components/registration/Registration';
import SpringModal from '../../components/modals/Modal';
import { useNavigate } from "react-router-dom";
import writeUserData from '../../services/users/firebaseSet';
import { useTranslation } from 'react-i18next';

export function SignUpPage() {

  const [openModal , setOpenModal] = React.useState(false)
  const [modalText , setModalText] = React.useState("")
  const [modalTextColor , setModalTextColor] = React.useState("red")
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [aboutUser , setAboutUser] = React.useState({
    aboutUserFirstName : {value : "", valid : false},
    aboutUserLastName : {value : "", valid : false},
    aboutUserName :{value : "", valid : false},
    aboutUserEmail : {value : "", valid : false},
    aboutUserPhome : {value : "", valid : false},
    aboutUserAddres : {value : "", valid : true},
    aboutUserPassword : {value : "", valid : false},
    aboutUserCanfirmPassword : {value : "", valid : false}
  })

  const isValidUser = () => {
    return Object.values(aboutUser).every(({ valid }) => valid);
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    const isValid = isValidUser()
    if (isValid){
      try {
        const email = aboutUser.aboutUserEmail.value
        const password = aboutUser.aboutUserPassword.value
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user) {
          console.log(aboutUser)
          await writeUserData(aboutUser)
          await sendEmailVerification(userCredential.user) 
          setModalText(t("verificationEmailSent"))
          setModalTextColor("green")
          setTimeout(() => {
            setOpenModal(false)
            navigate("/signIn")
          },2000)
        } else {
          setModalText(t("userCreationFailed"))
          setModalTextColor("red")
        }
        setOpenModal(true)
        setTimeout(() => {setOpenModal(false)},3000)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setModalText(t("emailAlreadyInUse"))
            setModalTextColor("red")
            break;
          case 'auth/invalid-email':
            setModalText(t("invalidEmail"))
            setModalTextColor("red")
            break;
          case 'auth/weak-password':
            setModalText(t("weakPassword"))
            setModalTextColor("red")
            break;
          default:
            setModalText(t("registrationError"))
            setModalTextColor("red")
            break;
        }
        console.error('Registration error:', error.message);
        setModalTextColor("red")
        setTimeout(() => {setOpenModal(false)},3000)
        setOpenModal(true);
      }
  }else{
      setOpenModal(true)
      setTimeout(() => {setOpenModal(false)},3000)
      setModalText(t("fillRequiredFields"))
    }
  };
 
  return ( 
    <div onClick={()=>setOpenModal(false)}>
      <Registraion aboutUser={aboutUser} setAboutUser={setAboutUser} handleRegistration={handleRegistration} />
      <SpringModal openModal={openModal} modalText={modalText} modalTextColor={modalTextColor}/>
    </div>
  );
}