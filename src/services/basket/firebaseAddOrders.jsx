import { getDatabase, ref, update, push } from "firebase/database";

export default async function firebaseUpdateOrders(activUser, newProducts) {

    if (!activUser ) {
        console.error('Invalid active user!');
        return;
    }

    const db = getDatabase();
    let userId = null
    Object.keys(activUser).map((id)=> {
        userId = activUser[id].userId
    })
    const userRef = ref(db, `users/${userId}/Orders`); 
    const newOrderRef = push(userRef);
    const newOrderId = newOrderRef.key;

    const updates = {};
    updates[`${newOrderId}`] = newProducts;

    update(userRef, updates)
    .then(() => {
        console.log('Data updated successfully!');
    })
    .catch((error) => console.error('Failed to update data:', error));
}

