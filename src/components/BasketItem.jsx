import { useDispatch } from "react-redux";
import { removeFromBasket, updateItem } from "../redux/actions/basketActions";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-1 p-4 bg-white d-flex justify-content-between align-items-center my-5 text-black">
      <div className="d-flex align-items-center gap-3">
        <img
          className="rounded-3"
          width={60}
          height={60}
          src={item.image}
        ></img>
        <h4>
          <span className="mx-2">{item.brand} -</span>
          <span>{item.model}</span>
        </h4>
        <h4 className="text-success">{item.price} ₺</h4>
      </div>
      <div className="d-flex align-items-center gap-2">
        <h6>Miktar: {item.amount}</h6>
        <button
          onClick={() => dispatch(updateItem(item))}
          className="btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeFromBasket(item.id))}
          className="btn btn-sm btn-danger"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
