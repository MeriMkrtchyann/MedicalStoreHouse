import { getDatabase, ref, get } from "firebase/database";

export default async function readAllUsersData(email) {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
            return snapshot.val()
        }else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        throw new Error("Error reading data");
    }
}


