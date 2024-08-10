import React, { useState } from 'react';
import FertilizerItem from './FertilizerItem';

export default function Fertilizer() {
  const [products] = useState([
    { id: 1, name: "Sunflower Seeds"},
    { id: 2, name: "Pumpkin Seeds" },
    { id: 3, name: "Sesame Seeds"},
    // Add more products as needed
  ]);

  return (
    <div className="row">
      {products.map((product) => (
        <FertilizerItem key={product.id} product={product} />
      ))}
    </div>
  );
}
