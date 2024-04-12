import { getDatabase, ref, set } from "firebase/database";

export default async function firebaseUpdateCategory(categoryId, newCategoryName) {
  const db = getDatabase();
  const categoryRef = ref(db, `categories/${categoryId}`);

  try {
    await set(categoryRef, {
      categoryId: categoryId,
      categoryName: newCategoryName
    });
    console.log('Category updated successfully!');
  } catch (error) {
    console.error('Error updating category:', error);
    throw new Error('Failed to update category.');
  }
}
