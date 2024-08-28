import React from "react";

const BasketItem = ({ item }) => {
  return (
    <div className="rounded-1 p-4 bg-white d-flex justify-content-between align-items-center my-5 text-black">
        <div className="d-flex align-items-center gap-3">
            <img className="rounded-3" width={60} height={60} src={item.image}></img>
            <h4>
                <span className="mx-2">{item.brand} -</span>
                <span>{item.model}</span>
            </h4>
            <h4 className="text-success">{item.price} ₺</h4>
        </div>
        <div>
            <h6>Miktar: {item.amount}</h6>
        </div>
    </div>
  );
};

export default BasketItem;
