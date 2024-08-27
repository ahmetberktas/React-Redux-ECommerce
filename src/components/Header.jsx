import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Smart<span className="text-primary">Tech</span>
        </a>
        <nav className="d-flex gap-5">
          <NavLink to={'/'}>Ana Sayfa</NavLink>
          <NavLink to={'/basket'}>Sepet <span className="ms-2 badge bg-danger">0</span></NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
