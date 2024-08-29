import { ActionTypes } from "../actionTypes/actionTypes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

/* Senkron Aksiyonlar */
export const setBasketLoading = () => ({
  type: ActionTypes.SET_BASKET_LOADING,
});

export const setBasketError = () => ({
  type: ActionTypes.SET_BASKET_ERROR,
});

export const setBasket = (payload) => ({
  type: ActionTypes.SET_BASKET,
  payload,
});

/* Asenkron Aksiyonlar */
export const getBasketData = () => (dispatch) => {
  axios
    .get("/basket")
    .then((res) => dispatch(setBasket(res.data)))
    .catch(() => dispatch(setBasketError()));
};

export const addToBasket = (product) => (dispatch) => {
  const newProduct = { ...product, amount: 1 };
  axios
    .post("/basket", newProduct)
    .then(() =>
      dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: newProduct })
    )
    .catch(() => dispatch(setBasketError()));
};

export const updateItem = (product) => (dispatch) => {
  axios
    .patch(
      `/basket/${product.id}`,
      { amount: product.amount + 1 },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: product.id })
    )
    .catch(() => dispatch(setBasketError()));
};

export const removeFromBasket = (deleteId) => (dispatch) => {
  axios
    .delete(`/basket/${deleteId}`)
    .then(() =>
      dispatch({ type: ActionTypes.REMOVE_FROM_BASKET, payload: deleteId })
    )
    .catch(() => dispatch(setBasketError()));
};
