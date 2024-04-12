import { getDatabase, ref, set, get } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

export default async function writeCategoriesData(category) {
    const db = getDatabase();
    const categoriesRef = ref(db, 'categories');
    const query = await get(categoriesRef);

    const existingCategories = [];

    if (query.exists()) {
        query.forEach((categorySnapshot) => {
            existingCategories.push(categorySnapshot.val().categoryName);
        });
    }
    if (existingCategories.includes(category)) {
        console.log('Category already exists!');
    } else {
        const userId = uuidv4();
        try {
            await set(ref(db, 'categories/' + userId), {
                categoryId: userId,
                categoryName: category
            });
        } catch (e) {
            console.error("Error writing data to Firebase", e);
        }
    }
}
