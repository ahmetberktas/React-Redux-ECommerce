import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productActions";
import Loading from "../components/Loading";
import axios from "axios";

const MainPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(setLoading());
    axios
      .get("http://localhost:3000/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(res.data)));
  }, []);
  
  return (
    <div>
      {/* Veriler Yükleniyor */}
      {state.isLoading && <Loading></Loading>}
      {/* Hata Oluştu */}
      {state.isError && <p>Üzgünüz, bir hata oluştu</p>}
      {/* Veriler Yüklendi */}
      {state?.products.map((product) => (
        <div>{product.urunAdi}</div>
      ))}
    </div>
  );
};

export default MainPage;
