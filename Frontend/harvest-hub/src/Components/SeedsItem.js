import React from 'react';

export default function SeedsItem({ product }) {
  return (
    <div style={{ flex: "1 0 21%", margin: "10px" }}>
      <div className="card" style={{ width: "100%", marginBottom: "20px" }}>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Some quick example text about {product.name}.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}
