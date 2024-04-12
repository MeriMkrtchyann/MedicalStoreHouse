import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default async function passReset(email) {
    
    const auth = getAuth();
    console.log(email)

    sendPasswordResetEmail(auth, email)
    .then(() => {
        console.log('Password reset email sent!');
    })
    .catch((error) => {
        console.error('Error sending password reset email:', error);
    });
}


