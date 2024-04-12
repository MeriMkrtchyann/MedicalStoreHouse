import { getDatabase, ref, get } from "firebase/database";

export default async function readCategoresData() {
    const db = getDatabase();
    const categoryRef = ref(db, 'categories/');
    try {
        const snapshot = await get(categoryRef);
        if (snapshot.exists()) {
            const categories = snapshot.val()
            return categories;
        } else {
            return null; 
        }
    } catch(e) {
        console.error("Error reading data from Firebase", e);
    }
}
