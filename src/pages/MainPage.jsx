import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productActions";
import Loading from "../components/Loading";
import axios from "axios";
import Card from "../components/Card";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(setBasketLoading());
    dispatch(getProductData());
    dispatch(getBasketData());
  }, []);

  return (
    <div>
      {/* Veriler Yükleniyor */}
      {state.isLoading && <Loading></Loading>}
      {/* Hata Oluştu */}
      {state.isError && <p>Üzgünüz, bir hata oluştu</p>}
      {/* Veriler Yüklendi */}
      <div className="d-flex flex-wrap gap-3 p-4 justify-content-center">
        {state?.products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
