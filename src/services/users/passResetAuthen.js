import { getAuth, updatePassword } from "firebase/auth";
import firebaseUpdate from "./firebaseUpdateBasket";

export default async function passResetAuthen( email ,aboutUser , canfirmNewPassword, newPassword, setErrorText, setColor) {
  const sha256 = require('js-sha256');
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)

  if (user) {
    console.log(user)
    try {
      if (canfirmNewPassword && newPassword){
        const userId = Object.keys(aboutUser);
        const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
        let isPasswordValid =  newPassword.match(passwordValidationRegex)
        let isCanfirmNewPasswordValid = canfirmNewPassword.match(passwordValidationRegex)
        if (canfirmNewPassword === newPassword && isPasswordValid && isCanfirmNewPasswordValid) {
          await updatePassword(user, newPassword);
          await firebaseUpdate(userId[0], {
            password: sha256(newPassword)
          });
          setColor("green");
          setErrorText('Password updated successfully in Firebase Auth!')
          return true
        }else {
          setColor("red")
          setErrorText("Pleaz enter correct data")
        }
      }else{
        setColor("red")
        setErrorText("Pleaz enter correct data")
      }
     
    } catch (error) {
      setColor("red")
      setErrorText("Error updating password")
      console.error('Error updating password in Firebase Auth:', error);
    }
  } else {
    setColor("red")
    setErrorText('No user is signed in.')
  }
}
