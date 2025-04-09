import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedCart = carrito.filter((_, index) => index !== indexToRemove);
    setCarrito(updatedCart);
    localStorage.setItem("carrito", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1 className="title-card">🛒 Your Cart</h1>
      {carrito.length === 0 ? (
        <p>Is empty.. 🫤</p>
      ) : (
        carrito.map((item, index) => (
          <div className="details-card">
            <div key={index} className="details-info">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Price:</strong> {item.price}</p>
            </div>
            <button onClick={() => handleDelete(index)} className="delete-btn">🗑️ Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
