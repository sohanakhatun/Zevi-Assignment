<<<<<<< HEAD
import React, { useState } from "react";
import homebg from "../assets/Home.jpg";
import logo from "../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png";
import SearchResultsPage from "../Components/SearchResultsPage";
import toast from "react-hot-toast";
import useProducts from "../context/productContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { products } = useProducts();

  // STATE MANAGEMENT

  // state to check the state of filtered product array's length and to prevent the navigation to seach result page before pressing the enter key
  const [filteredProductArrayLength, setfilteredProductArrayLength] =
    useState(false);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [isLatestTrendBoxOpen, setIsLatestTrendBoxOpen] = useState(false);

  // CLICK HANDLER FUNCTION TO SET THE STATE OF OPENING OF LATEST TREND BOX
  const clickHandler = () => {
    setIsLatestTrendBoxOpen(true);
  };

  //  HANDLER TO TACKLE THE SEARCH FUNCTIONALITY
  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.value.toLowerCase();
    setSearchedProduct(searchInput);
    const filtered = products.filter(
      (item) => item.name.toLowerCase() === searchInput
    );
    console.log("filtered product", filtered);
    setFilteredProduct(filtered);
  };

  // HANDLER FUNCTION TO HANDLE THE ENTER KEY EVENT
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (filteredProduct.length === 0) {
        toast.error("No Products Found!");
      } else {
        setfilteredProductArrayLength(true);
      }
    }
  };

  // HANDLER FUNCTION FOR THE FILTERS UNDER POPULAR SUGGESTIONS
  const handleSearchFilterClick = (event) => {
    const { value } = event.target;
    let filterdProds = products.filter((prod) => prod.name === value);
    setFilteredProduct(filterdProds);
    setfilteredProductArrayLength(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col  relative overflow-x-hidden">
      {/* logo */}

        <div className="flex justify-end mt-0 ">
      <img src={logo} className="z-30 absolute xsm:mt-[-10px]" />
      </div>

      {/* input div */}
      <div
        className={
          filteredProductArrayLength > 0
            ? " flex  w-1/2 xsm:ml-[30%] xxsm:ml-[20%] justify-end mt-0.5 mb-2"
            : "flex w-fit justify-end mx-auto xsm:mt-10 sm:mt-[50px] md:mt-[80px] lg:mt-[120px] xsm:w-full lg:w-[600px] "
        }
      >
        <input
          type="search"
          placeholder="Search"
          onClick={clickHandler}
          onChange={handleSearch}
          value={searchedProduct}
          onKeyDown={handleKeyPress}
          className=" relative z-10 bg-white border-2  w-full h-[50px] rounded-lg "
        />
        <div className="z-20 absolute flex mt-1 mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M20.5921 36.3226C29.2799 36.3226 36.3228 29.2797 36.3228 20.5918C36.3228 11.904 29.2799 4.86108 20.5921 4.86108C11.9042 4.86108 4.86133 11.904 4.86133 20.5918C4.86133 29.2797 11.9042 36.3226 20.5921 36.3226Z"
              stroke="#200E32"
              strokeOpacity="0.4"
              strokeWidth="2.625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31.5317 32.3484L37.6987 38.4996"
              stroke="#200E32"
              strokeOpacity="0.4"
              strokeWidth="2.625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Conditional rendering of the appropriate component */}
      {filteredProduct.length && filteredProductArrayLength > 0 ? (
        <SearchResultsPage filteredProducts={filteredProduct} />
      ) : (
        <>
          {/* Render the Home Page */}
          {/* background image */}
          <img
            src={homebg}
            className="w-screen absolute h-full bg-no-repeat opacity-50"
          />

          {/* Latest Trend box  */}
          <div
            className={
              isLatestTrendBoxOpen
                ? "absolute z-50 flex flex-col xxsm:mt-[16%] sm:mt-[18%] xsm:mt-[29%] ml-[10%] lg:ml-[25%] mr-[10%]   h-fit bg-white rounded-[4px] shadow-zinc-900 "
                : "hidden"
            }
          >
            <h2 className=" text-black text-[21px] font-semibold font-inter xsm:p-2 xxsm:p-0.5 xxsm:text-sm">
              Latest Trends
            </h2>
            {/* filters with image div */}
            <div className="flex flex-row  flex-wrap gap-1 ml-[5%]">
              {Array.from(products, (item, index) =>
                index < 5 ? (
                  <div className="xsm:ml-10 md:ml-1">
                    <img
                      src={item.image}
                      className=" w-13/14 sm:h-32 xxsm:h-24 rounded-sm shadow-sm  "
                    />
                    <button
                      value={item.name}
                      onClick={handleSearchFilterClick}
                      className="text-[12px] flex flex-wrap "
                    >
                      {item.name}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
            <h2 className=" text-black text-[21px]  font-bold font-inter p-2  sm:text-sm sm:p-1 xsm:-mt-1 xxsm:text-sm xxsm:p-0.5">
              Popular suggestions
            </h2>
            <div className="flex flex-col items-start ml-5 gap-1 ">
              <button
                className=" font-inter  xsm:text-sm xxsm:text-sm "
                value="Striped shirt dress"
                onClick={handleSearchFilterClick}
              >
                Striped shirt dress
              </button>
              <button
                className=" font-inter xsm:text-sm xxsm:text-sm"
                value="Denim jumpsuit"
                onClick={handleSearchFilterClick}
              >
                Denim jumpsuit
              </button>
              <button
                className=" font-inter xsm:text-sm xxsm:text-sm"
                value="Leather dresses"
                onClick={handleSearchFilterClick}
              >
                Leather dresses
              </button>
              <button
                className=" font-inter xsm:text-sm xxsm:text-sm"
                value="Solid tshirts"
                onClick={handleSearchFilterClick}
              >
                Solid tshirts
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
=======
import React, { useState } from "react";
import homebg from "../assets/Home.jpg";
import logo from "../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png";
import SearchResultsPage from "../Components/SearchResultsPage";
import toast from "react-hot-toast";
import useProducts from "../context/productContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { products } = useProducts();

  // STATE MANAGEMENT

  // state to check the state of filtered product array's length and to prevent the navigation to seach result page before pressing the enter key
  const [filteredProductArrayLength, setfilteredProductArrayLength] =
    useState(false);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [isLatestTrendBoxOpen, setIsLatestTrendBoxOpen] = useState(false);

  // CLICK HANDLER FUNCTION TO SET THE STATE OF OPENING OF LATEST TREND BOX
  const clickHandler = () => {
    setIsLatestTrendBoxOpen(true);
  };

  //  HANDLER TO TACKLE THE SEARCH FUNCTIONALITY
  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.value.toLowerCase();
    setSearchedProduct(searchInput);
    const filtered = products.filter(
      (item) => item.name.toLowerCase() === searchInput
    );
    console.log("filtered product", filtered);
    setFilteredProduct(filtered);
  };

  // HANDLER FUNCTION TO HANDLE THE ENTER KEY EVENT
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (filteredProduct.length === 0) {
        toast.error("No Products Found!");
      } else {
        setfilteredProductArrayLength(true);
      }
    }
  };

  // HANDLER FUNCTION FOR THE FILTERS UNDER POPULAR SUGGESTIONS
  const handleSearchFilterClick = (event) => {
    const { value } = event.target;
    let filterdProds = products.filter((prod) => prod.name === value);
    setFilteredProduct(filterdProds);
    setfilteredProductArrayLength(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col  relative overflow-x-hidden">
      {/* logo */}

        <div className="flex justify-end mt-0 ">
      <img src={logo} className="z-30 absolute xsm:mt-[-10px]" />
      </div>

      {/* input div */}
      <div
        className={
          filteredProductArrayLength > 0
            ? " flex  w-1/2 xsm:ml-[30%] xxsm:ml-[20%] justify-end mt-0.5 mb-2"
            : "flex w-fit justify-end mx-auto xsm:mt-10 sm:mt-[50px] md:mt-[80px] lg:mt-[120px] xsm:w-full lg:w-[600px] "
        }
      >
        <input
          type="search"
          placeholder="Search"
          onClick={clickHandler}
          onChange={handleSearch}
          value={searchedProduct}
          onKeyDown={handleKeyPress}
          className=" relative z-10 bg-white border-2  w-full h-[50px] rounded-lg "
        />
        <div className="z-20 absolute flex mt-1 mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M20.5921 36.3226C29.2799 36.3226 36.3228 29.2797 36.3228 20.5918C36.3228 11.904 29.2799 4.86108 20.5921 4.86108C11.9042 4.86108 4.86133 11.904 4.86133 20.5918C4.86133 29.2797 11.9042 36.3226 20.5921 36.3226Z"
              stroke="#200E32"
              strokeOpacity="0.4"
              strokeWidth="2.625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31.5317 32.3484L37.6987 38.4996"
              stroke="#200E32"
              strokeOpacity="0.4"
              strokeWidth="2.625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Conditional rendering of the appropriate component */}
      {filteredProduct.length && filteredProductArrayLength > 0 ? (
        <SearchResultsPage filteredProducts={filteredProduct} />
      ) : (
        <>
          {/* Render the Home Page */}
          {/* background image */}
          <img
            src={homebg}
            className="w-screen absolute h-full bg-no-repeat opacity-50"
          />

          {/* Latest Trend box  */}
          <div
            className={
              isLatestTrendBoxOpen
                ? "absolute z-50 flex flex-col xxsm:mt-[16%] sm:mt-[18%] xsm:mt-[29%] ml-[10%] lg:ml-[25%] mr-[10%]   h-fit bg-white rounded-[4px] shadow-zinc-900 "
                : "hidden"
            }
          >
            <h2 className=" text-black text-[21px] font-semibold font-inter xsm:p-2 xxsm:p-0.5 xxsm:text-sm">
              Latest Trends
            </h2>
            {/* filters with image div */}
            <div className="flex flex-row  flex-wrap gap-1 ml-[5%]">
              {Array.from(products, (item, index) =>
                index < 5 ? (
                  <div className="xsm:ml-10 md:ml-1">
                    <img
                      src={item.image}
                      className=" w-13/14 sm:h-32 xxsm:h-24 rounded-sm shadow-sm  "
                    />
                    <button
                      value={item.name}
                      onClick={handleSearchFilterClick}
                      className="text-[12px] flex flex-wrap "
                    >
                      {item.name}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
            <h2 className=" text-black text-[21px]  font-bold font-inter p-2  sm:text-sm sm:p-1 xsm:-mt-1 xxsm:text-sm xxsm:p-0.5">
              Popular suggestions
            </h2>
            <div className="flex flex-col items-start ml-5 gap-1 ">
              <button
                className=" font-inter  xsm:text-sm xxsm:text-sm "
                value="Striped shirt dress"
                onClick={handleSearchFilterClick}
              >
                Striped shirt dress
              </button>
              <button
                className=" font-inter xsm:text-sm xxsm:text-sm"
                value="Denim jumpsuit"
                onClick={handleSearchFilterClick}
              >
                Denim jumpsuit
              </button>
              <button
                className=" font-inter xsm:text-sm xxsm:text-sm"
                value="Leather dresses"
                onClick={handleSearchFilterClick}
              >
                Leather dresses
              </button>
              <button
                className=" font-inter xsm:text-sm xxsm:text-sm"
                value="Solid tshirts"
                onClick={handleSearchFilterClick}
              >
                Solid tshirts
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
>>>>>>> 06a5dc1926b9643d723c9e434186a4521f55fcf3
