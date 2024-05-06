import { getDatabase, ref, remove } from "firebase/database";

export default async function removeElementFromBasket(activUser, elementKeyToDelete) {
    
    if (!activUser || !elementKeyToDelete) {
        console.error('Invalid active user or element key!');
        return;
    }

    const db = getDatabase();
    let userId = null;
    Object.keys(activUser).forEach((id) => {
        userId = activUser[id].userId;
    });
    const userBasketRef = ref(db, `users/${userId}/basket/${elementKeyToDelete}`);

    remove(userBasketRef)
    .then(() => {
        console.log('Element removed from basket successfully!');
    })
    .catch((error) => console.error('Failed to remove element from basket:', error));
}
