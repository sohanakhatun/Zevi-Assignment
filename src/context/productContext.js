<<<<<<< HEAD
import React, { createContext, useContext } from "react";
export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});
export const ProductContextProvider = ProductContext.Provider;

// custom hook
export default function useProducts() {
  return useContext(ProductContext);
}
=======
import React, { createContext, useContext } from "react";
export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});
export const ProductContextProvider = ProductContext.Provider;

// custom hook
export default function useProducts() {
  return useContext(ProductContext);
}
>>>>>>> 06a5dc1926b9643d723c9e434186a4521f55fcf3
