import React from "react";
import ProductoListContainer from "../../components/ProductoListContainer/ProductoListContainer";
import Sponsors from "../../components/Sponsors/Sponsors";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <ProductoListContainer />
      <Sponsors />
    </>
  );
};

export default HomePage;
