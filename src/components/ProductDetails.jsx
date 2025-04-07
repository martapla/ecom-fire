import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseServer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('Not found');
        }
      } catch (error) {
        console.error('Error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addCarrito = () => {
    const saveCarrito = JSON.parse(localStorage.getItem("carrito")) 
  
    saveCarrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(saveCarrito));
    alert("Plant added to Cart!");
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Not found sorry..</p>;

  return (
    <>
      <div>
        <Link to="/" className="back-btn">🪴 Back</Link>
      </div>
      <h1 className="title-card">Plant Details 🍃</h1>
      <div className="product-info">
          <p><strong> 🍀  Name:</strong> {product.name}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
        <button onClick={addCarrito}>
        🛒 Add
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
