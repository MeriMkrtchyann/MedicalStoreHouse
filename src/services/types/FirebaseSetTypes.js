import { getDatabase, ref, get, set } from "firebase/database";

export default async function writeTypeData(categoryId, type) {
  const db = getDatabase();
  const typeRef = ref(db, 'categories/' + categoryId + '/types/' + type);

  try {
    const snapshot = await get(typeRef);
    if (snapshot.exists()) {
      console.log('Type already exists in this category.');
    } else {
      await set(typeRef, {
        typeName: type
      });
      console.log('Type successfully added to the category.');
    }
  } catch(e) {
    console.error("Error writing data to Firebase", e);
  }
}
