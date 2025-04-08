import React from 'react'
import { Link } from "react-router-dom";

const ProductList = ({products}) => {
  return (
    <>
    <h1 className="title-card"> 🌱 Plants List 🌱</h1>
    <div className="product-card">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-info">
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Category:</strong> {product.category}</p>
          </Link>
        ))}
    </div>
     
  
  </>
  )
}

export default ProductList