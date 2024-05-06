import { getDatabase, ref, update } from "firebase/database";

export default async function firebaseUpdateOrder(activUser, orderId, upadate, praduct) {

    if (!activUser || !orderId || !upadate ) {
        console.error('Invalid active user!');
        return;
    }
    console.log( activUser)
    console.log( orderId)
    console.log( upadate)
    console.log( praduct)
    

    const db = getDatabase();
    const userRef = ref(db, `users/${activUser}/Orders/${orderId}/${praduct}`); 

    update(userRef, upadate)
    .then(() => {
        console.log('Data updated successfully!');
    })
    .catch((error) => console.error('Failed to update data:', error));
}

