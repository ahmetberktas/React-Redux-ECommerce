import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img className="rounded" width={200} height={200} src={product.image}></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.urunAdi}</h5>
        <p>
          <span className="fw-bold">{product.brand}</span> {product.model}
        </p>
        <p className="d-flex flex-column">
          {product.property.map((line) => (
            <span>{line}</span>
          ))}
        </p>
        <button className="btn btn-warning w-100 d-flex justify-content-between">
            <span>Sepete Ekle</span>
            <span className="text-success fw-bold">{product.price} ₺</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
