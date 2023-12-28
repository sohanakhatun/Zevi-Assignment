<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { customProducts } from "./data";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import { ProductContextProvider } from "./context/productContext";
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const newProducts = [...customProducts];
    setProducts(newProducts);
  }, []);
  return (
    <div>
        <ProductContextProvider value={{ products, setProducts }}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
         
      </Routes>
        </ProductContextProvider>
    </div>
  );
};

export default App;
=======
import React, { useState, useEffect } from "react";
import { customProducts } from "./data";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import { ProductContextProvider } from "./context/productContext";
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const newProducts = [...customProducts];
    setProducts(newProducts);
  }, []);
  return (
    <div>
        <ProductContextProvider value={{ products, setProducts }}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
         
      </Routes>
        </ProductContextProvider>
    </div>
  );
};

export default App;
>>>>>>> 06a5dc1926b9643d723c9e434186a4521f55fcf3
