import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";
import Loading from "../components/Loading";
import BasketItem from "../components/BasketItem";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);

  useEffect(() => {
    dispatch(setBasketLoading());
    dispatch(getBasketData());
  }, [dispatch]);

  return (
    <div className="container">
      {/* Ürünler Yükleniyor */}
      {state.isLoading && <Loading></Loading>}
      {/* Hata Olursa */}
      {state.isError && <p>Üzgünüz, bir hata oluştu</p>}
      {/* Veriler Geldiğinde */}
      {state.basket.map((i) => (
        <BasketItem key={i.id} item={i}></BasketItem>
      ))}
    </div>
  );
};

export default ProductsPage;
