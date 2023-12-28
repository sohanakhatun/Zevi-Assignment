import React, { useState } from "react";
import Ratings from "./Ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ product }) => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div class="flex font-inter  w-64 px-4 mb-8 relative">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
        {/* Product Image */}
        <div className="relative group">
          <img src={product.image} alt="Product" className="w-full" />
          <button
            class=" w-8 h-8 right-[5%] top-[16px] absolute"
            onClick={clickHandler}
          >
            <FavoriteIcon className={click ? "text-red-600" : "text-white"} />
          </button>
          {/* "View Products" div */}
          <div className="absolute bottom-0 left-0 w-full bg-indigo-500 bg-opacity-75 text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* Content of the "View Products" div */}
            <h3 className="text-lg font-semibold">View Products</h3>
          </div>
        </div>
        {/* Other product details */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.brand}</p>
          <p className=" font-bold text-[#6D84FF]">
            <span className=" line-through text-gray-500 font-semibold">
              Rs 599
            </span>{" "}
            Rs {product.price}
          </p>
          <p className="font-inter">
            <Ratings ratings={product.ratings} /> (210)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
