import { getDatabase, ref, get, set } from "firebase/database";

export default async function writeTypeData({categoryId, id, name, price, quantity, about, image} ) {
  const db = getDatabase();
  const typeRef = ref(db, 'categories/' + categoryId + '/Products/' + id);

  try {
    const snapshot = await get(typeRef);
    if (snapshot.exists()) {
      console.log('Type already exists in this category.');
    } else {
      await set(typeRef, {
        PraductId : id,
        PraductName: name,
        PraductPrice : price,
        PraductQuantity : quantity,
        PraductAbout : about,
        PraductImage : image
      });
      console.log('Type successfully added to the category.');
    }
  } catch(e) {
    console.error("Error writing data to Firebase", e);
  }
}
