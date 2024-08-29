import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const state = useSelector((store) => store.basketReducer);

  const total_count = state.basket.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Smart<span className="text-primary">Tech</span>
        </a>
        <nav className="d-flex gap-5">
          <NavLink to={"/"}>Ana Sayfa</NavLink>
          <NavLink to={"/basket"}>
            Sepet <span className="ms-2 badge bg-danger">{total_count}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
