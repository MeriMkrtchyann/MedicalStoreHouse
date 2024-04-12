import { getDatabase, ref, remove } from "firebase/database";

export default async function deleteCategory(categoryId) {
    const db = getDatabase();
    const categoryRef = ref(db, 'categories/' + categoryId);
    try {
        await remove(categoryRef);
        console.log('Category deleted successfully!');
    } catch (e) {
        console.error('Error deleting category:', e.message);
    }
}
