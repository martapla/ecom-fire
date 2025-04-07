import { useEffect, useState } from 'react'
import { getProducts} from "../lib/productRequest";
import { collection, addDoc } from 'firebase/firestore';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseServer';

export const useFireBaseFetch = () => {

    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

          setLoading(true);
          try {
            const productData = await getProducts(); 
            console.log("🔥 Productos traídos desde Firebase:", productData);
            setData(productData);
            

          } catch (err) {
            console.error("❌ Error al obtener productos:", err.message);
            setError(err.message);

          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);


  return { data, loading, error,

  }
}

export default useFireBaseFetch