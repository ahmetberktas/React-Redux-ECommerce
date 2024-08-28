import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const state = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();
  const found = state.basket.find((i) => i.id === product.id);
  const handleClick = () => {
    if(found) {

    } else {
      dispatch(addToBasket(product));
    }
  }
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
        <button onClick={handleClick} className="btn btn-warning w-100 d-flex justify-content-between">
            <span>{found ? 'Miktarı Arttır' : 'Sepete Ekle'}</span>
            <span className="text-success fw-bold">{product.price} ₺</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
