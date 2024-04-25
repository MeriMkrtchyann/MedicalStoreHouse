import { getDatabase, ref, update } from "firebase/database";

export default async function updateUserData(activUser, updates={}, callback) {
    
    const db = getDatabase();
    let userId = null
    Object.keys(activUser).map((id)=> {
        userId = activUser[id].userId
    })
    const userRef = ref(db, `users/${userId}`); 

    update(userRef, updates)
    .then(() => {
        console.log('Data updated successfully!');
        if (callback) callback(); 
    })
    .catch((error) => console.error('Failed to update data:', error));
}

