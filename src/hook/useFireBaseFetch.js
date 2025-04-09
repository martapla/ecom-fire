import { useEffect, useState } from 'react'
import { getProducts} from "../lib/productRequest";
import { db } from '../firebase/firebaseServer';

export const useFireBaseFetch = () => {

    const[data,setData] = useState([]) // To dos los productos
    const[filterPlants,setFilterPlants]= useState([]) // Productos filtrados
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)

    // Cargar los productos desde Firebase
    useEffect(() => {
        const fetchData = async () => {

          setLoading(true);
          try {
            const productData = await getProducts(); 
            console.log("Productos traídos desde Firebase:", productData);
            setData(productData); //guardamos todos los productos de Firebase.
            setFilterPlants(productData); // Inicializamos filterPlants con todos los productos
            

          } catch (err) {
            console.error("Error al obtener productos:", err.message);
            setError(err.message);

          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);

    // Actualizar filterPlants al aplicar filtro
    const handleFilter = (category) => {
      console.log("Filtrando por categoría:", category);
     if(!category){ // Si no hay categoría (null o undefined), muestra todos los productos
      setFilterPlants(data)
     } else {
      setFilterPlants(data.filter(plant => 
        plant.category.toLowerCase() === category.toLowerCase()))
     }
    }


  return { data, loading, error, handleFilter, filterPlants}
}

export default useFireBaseFetch