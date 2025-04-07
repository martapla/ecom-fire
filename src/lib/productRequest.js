import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebaseServer" 

export const getProducts = async() => {


    const querySnapshot = await getDocs(collection(db, "products"));

    const data = querySnapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data(),
    }))
    console.log(data)
    return data

    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
}
