import React, { useEffect } from "react";
import SearchComponent from "../search/Search";
import logo from "../../logo_meli.png";
import "./home.scss";

const HomeComponent = (props) => {
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div className="logo-home">
        <img src={logo} className="logo-header" alt="Mercado Libre" />
      </div>
      <SearchComponent value={1} />
    </React.Fragment>
  );
};

export default HomeComponent;
