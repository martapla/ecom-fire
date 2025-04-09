import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseServer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {  // Ask for ID Product
    
    getDoc(doc(db, 'products', id)).then((docSnap) => {
  
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() }); //Save in state if exist
      } else {
        console.log('Product not found');
      }
  
      // stop showing Loading..
      setLoading(false);
    });
  }, [id]);

  // LOCALSTORAGE
  const addCarrito = () => {
    const saveCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
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
      <div className="details-card">
          <div className="details-info">
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <button onClick={addCarrito} className='add-btn'>
                🛒 Add
              </button>
          </div>
      </div>
    </>
  );
};

export default ProductDetails;
