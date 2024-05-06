import { getDatabase, ref, remove } from "firebase/database";

export default async function removeBasket(activUser) {
    
    if (!activUser ) {
        console.error('Invalid active user or element key!');
        return;
    }

    const db = getDatabase();
    let userId = null;
    Object.keys(activUser).forEach((id) => {
        userId = activUser[id].userId;
    });
    const userBasketRef = ref(db, `users/${userId}/basket`);

    remove(userBasketRef)
    .then(() => {
        console.log('Removed  basket successfully!');
    })
    .catch((error) => console.error('Failed remove basket:', error));
}
