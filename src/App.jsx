import React from "react";
//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductoListContainer from "./components/ProductoListContainer/ProductoListContainer";
//Pages
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";
import DetailProductPage from "./pages/DetailProductPage/DetailProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/category/:id" element={<ProductoListContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
