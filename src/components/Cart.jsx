import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) 
    setCarrito(carritoGuardado);
  }, []);

  return (
    <div>
      <h1 className="title-card">🛒 Your Cart</h1>
      {carrito.length === 0 ? (
        <p>Is empty.. 🫤</p>
      ) : (
        carrito.map((item, index) => (
          <div key={index} className="product-info">
            <p><strong> 🍀  Name:</strong> {item.name}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
