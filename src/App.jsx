import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import ProductoListContainer from "./components/ProductoListContainer/ProductoListContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ProductoListContainer />
      <Sponsors />
      <Footer />
    </>
  );
};

export default App;
