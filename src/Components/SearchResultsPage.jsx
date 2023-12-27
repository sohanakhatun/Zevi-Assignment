import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../context/productContext";
import Sidebar from "./Sidebar";

const SearchResultsPage = ({ filteredProducts }) => {
  const { products } = useProducts();
  const [sidebarFilteredProducts, setSidebarFilteredProducts] = useState([]);
  return (
    <div className="w-screen flex xsm:flex-row xxsm:flex-col mt-0 sm:gap-24 xsm:gap-12">
    {/* sidebar for filters */}
    <div className=" w-10/12">
      <h2 className="text-lg font-semibold font-inter">Search Results</h2>
      <Sidebar
        sidebarFilteredProducts={sidebarFilteredProducts}
        setSidebarFilteredProducts={setSidebarFilteredProducts}
      />
    </div>

    {/* products side */}
    <div className="flex flex-col gap-x-2">
      {/* search results */}
      <div>
      {sidebarFilteredProducts.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-2">
          {sidebarFilteredProducts.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            <div className="flex flex-row flex-wrap gap-1">
              {filteredProducts.map((item) => (
                <ProductCard product={item} />
              ))}
            </div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      )}
      </div>
     

      {/* all products */}
      <div className="flex flex-col flex-wrap w-screen overflow-x-hidden">
        <h1 className=" font-inter font-bold text-blue-700 text-4xl mb-4 items-center ">
          All Products
        </h1>
        <div className="flex flex-row flex-wrap gap-x-1">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default SearchResultsPage;
