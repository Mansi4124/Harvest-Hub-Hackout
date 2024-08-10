import React, { useState } from 'react';

export default function VegetablesItem({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`${product.name} added to cart with quantity ${quantity}`);
    // Here you would typically add the product and quantity to the cart state in a parent component or a global state
  };

  return (
    <div style={{ flex: "1 0 21%", margin: "10px" }}>
      <div className="card" style={{ width: "100%", marginBottom: "20px" }}>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Some quick example text about {product.name}.</p>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <button onClick={handleDecrease} className="btn btn-secondary" style={{ marginRight: "5px" }}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease} className="btn btn-secondary" style={{ marginLeft: "5px" }}>+</button>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
