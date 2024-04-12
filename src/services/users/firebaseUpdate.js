import { getDatabase, ref, update } from "firebase/database";

export default async function updateUserData(activUser, updates={}) {
    
    const db = getDatabase();
    const userRef = ref(db, `users/${activUser}`); 

    update(userRef, updates)
    .then(() => console.log('Data updated successfully!'))
    .catch((error) => console.error('Failed to update data:', error));
}

