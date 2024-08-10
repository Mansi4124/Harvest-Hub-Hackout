import React, { useState } from 'react';
import SeedsItem from './SeedsItem';

export default function Seeds() {
  const [products] = useState([
    { id: 1, name: "Sunflower Seeds" },
    { id: 2, name: "Pumpkin Seeds" },
    { id: 3, name: "Sesame Seeds"},
    // Add more products as needed
  ]);

  return (
    <div className="row">
      {products.map((product) => (
        <SeedsItem key={product.id} product={product} />
      ))}
    </div>
  );
}
