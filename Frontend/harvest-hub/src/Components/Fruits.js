import React, { useState } from 'react';
import FruitsItem from './FruitsItem';

export default function Fruits() {
  const [products] = useState([
    { id: 1, name: "Sunflower Seeds" },
    { id: 2, name: "Pumpkin Seeds" },
    { id: 3, name: "Sesame Seeds"},
    // Add more products as needed
  ]);

  return (
    <div className="row">
      {products.map((product) => (
        <FruitsItem key={product.id} product={product} />
      ))}
    </div>
  );
}
