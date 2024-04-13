import { getDatabase, ref, get } from "firebase/database";

export default async function getCategoryData() {
  const db = getDatabase();
  const categoryRef = ref(db, `categories/`);

  try {
    const snapshot = await get(categoryRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log('Category data:', data);
      return data;
    } else {
      console.log('Category not found.');
      return null;
    }
  } catch(e) {
    console.error("Error getting data from Firebase", e);
    return null;
  }
}
