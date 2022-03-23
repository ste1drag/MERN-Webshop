import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import ContactPage from './components/ContactPage/ContactPage';
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import Card from "./components/CardItem/CardItem";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<Product/>} />
          <Route  path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  /* */
}

export default App;
