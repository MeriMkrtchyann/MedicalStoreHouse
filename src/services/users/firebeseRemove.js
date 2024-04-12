import { getDatabase, ref, remove } from "firebase/database";

export default async function removeUserData(activUser) {
    
    const db = getDatabase();
    const userRef = ref(db, `users/${activUser}`); 

    const updates = {
    email: 'newemail@example.com',
    fullName: 'New Full Name'
    };

    remove(userRef)
    .then(() => console.log('Data removed successfully!'))
    .catch((error) => console.error('Failed to remove data:', error));
}

