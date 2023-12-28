
import React from "react";
import ProductCard from "./ProductCard";
const Products = ({ products }) => {
  return (
    <>
      <h1 className="font-inter font-bold text-blue-700 text-lg underline-offset-2 ml-[50%]">
        All Products
      </h1>
      <div className="w-screen h-screen grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4  items-baseline py-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
