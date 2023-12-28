<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import useProducts from "../context/productContext";
import ReactStars from "react-stars";

const Sidebar = ({ sidebarFilteredProducts, setSidebarFilteredProducts }) => {
  const brands = [
    "Mango",
    "H&M",
    "Forever 21",
    "ONE",
    "Moda Rapido",
    "Mast n Harbour",
  ];

  const priceRangesArray = [
    { min: 0, max: 500, label: "0-500", checked: false },
    { min: 500, max: 1000, label: "500-1000", checked: false },
    { min: 1000, max: 3000, label: "1000-3000", checked: false },
    { min: 3000, max: 5000, label: "3000-5000", checked: false },
    { min: 5000, max: 10000, label: "5000-10000", checked: false },
  ];

  const ratingsArray = ["1", "2", "3", "4", "5"];

  // STATE MANAGEMENT
  const { products } = useProducts();
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceRanges, setPriceRanges] = useState(
    priceRangesArray.reduce((acc, range, index) => {
      acc[`range${index + 1}`] = range;
      return acc;
    }, {})
  );
  const [ratingsFilters, setRatingsFilters] = useState([]);
  // HANDLER FUNCTIONS FOR FILTERS
  const handleBrandChange = (brand) => {
    if (brandFilters.includes(brand)) {
      setBrandFilters(brandFilters.filter((item) => item !== brand));
    } else {
      setBrandFilters([...brandFilters, brand]);
    }
  };

  const handlePriceChange = (rangeKey) => {
    setPriceRanges({
      ...priceRanges,
      [rangeKey]: {
        ...priceRanges[rangeKey],
        checked: !priceRanges[rangeKey].checked,
      },
    });
  };

  const handleRatingsChange = (rating) => {
    let newRatings = [...ratingsFilters];
    if (newRatings.includes(rating)) {
      newRatings = newRatings.filter((selected) => selected !== rating);
    } else {
      newRatings.push(rating);
    }
    setRatingsFilters(newRatings);
  };

  // USEFFECT HOOK FUNCTIONALITIES TO RENDER THE DATA

  // BRAND FILTER
  useEffect(() => {
    setSidebarFilteredProducts(
      products.filter((prod) => brandFilters.includes(prod.brand))
    );
    console.log("product brand filter", sidebarFilteredProducts);
  }, [brandFilters]);

  // PRICE RANGE FILTER
  useEffect(() => {
    const filtered = products.filter((item) =>
      Object.keys(priceRanges).some((rangeKey) => {
        const { min, max, checked } = priceRanges[rangeKey];
        return checked && item.price >= min && item.price <= max;
      })
    );
    setSidebarFilteredProducts(filtered);
  }, [priceRanges]);

// RATINGS
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      ratingsFilters.includes(product.ratings)
    );
    setSidebarFilteredProducts(filteredProducts);
  }, [ratingsFilters]);
  
  // JSX ELEMENT
  return (
    <div className="w-[100%] flex items-baseline gap-1 xsm:flex-col xxsm:flex-row">
      {/* BRAND FILTER */}

      {/* ACCORDION */}
      <Accordion className="w-fit -px-1  h-fit md:w-[150%]">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className="font-inter">BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {brands.map((item, itemIndex) => (
              <FormControlLabel
                control={<Checkbox size="12px" />}
                checked={brandFilters.includes(brands[itemIndex])}
                onChange={() => handleBrandChange(brands[itemIndex])}
                label={brands[itemIndex]}
                value={brands[itemIndex]}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* PRICE RANGE FILTER */}

      {/* ACCORDION */}
      <Accordion className="w-fit -px-1 h-fit md:w-[150%]">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {priceRangesArray.map((range, index) => (
              <FormControlLabel
                control={<Checkbox size="12px" />}
                checked={priceRanges[`range${index + 1}`].checked}
                onChange={() => handlePriceChange(`range${index + 1}`)}
                label={priceRanges[`range${index + 1}`].label}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* RATINGS FILTER */}

      {/* ACCORDION */}
      <Accordion className="w-fit -px-1 h-fit md:w-[150%]">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>RATINGS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col flex-wrap">
            {ratingsArray.map((rating, index) => {
              return (
                <>
                  <FormControlLabel
                    key={index}
                    control={<Checkbox size="12px" />}
                    checked={ratingsFilters.includes(rating)}
                    label={<ReactStars count={rating} value={rating} />}
                    value={rating}
                    onChange={() => handleRatingsChange(rating)}
                  />
                </>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
=======
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import useProducts from "../context/productContext";
import ReactStars from "react-stars";

const Sidebar = ({ sidebarFilteredProducts, setSidebarFilteredProducts }) => {
  const brands = [
    "Mango",
    "H&M",
    "Forever 21",
    "ONE",
    "Moda Rapido",
    "Mast n Harbour",
  ];

  const priceRangesArray = [
    { min: 0, max: 500, label: "0-500", checked: false },
    { min: 500, max: 1000, label: "500-1000", checked: false },
    { min: 1000, max: 3000, label: "1000-3000", checked: false },
    { min: 3000, max: 5000, label: "3000-5000", checked: false },
    { min: 5000, max: 10000, label: "5000-10000", checked: false },
  ];

  const ratingsArray = ["1", "2", "3", "4", "5"];

  // STATE MANAGEMENT
  const { products } = useProducts();
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceRanges, setPriceRanges] = useState(
    priceRangesArray.reduce((acc, range, index) => {
      acc[`range${index + 1}`] = range;
      return acc;
    }, {})
  );
  const [ratingsFilters, setRatingsFilters] = useState([]);
  // HANDLER FUNCTIONS FOR FILTERS
  const handleBrandChange = (brand) => {
    if (brandFilters.includes(brand)) {
      setBrandFilters(brandFilters.filter((item) => item !== brand));
    } else {
      setBrandFilters([...brandFilters, brand]);
    }
  };

  const handlePriceChange = (rangeKey) => {
    setPriceRanges({
      ...priceRanges,
      [rangeKey]: {
        ...priceRanges[rangeKey],
        checked: !priceRanges[rangeKey].checked,
      },
    });
  };

  const handleRatingsChange = (rating) => {
    const filteredProduct = products.filter(
      (product) => product.ratings === rating
    );
    setRatingsFilters(filteredProduct);
    console.log("ratings filter product", filteredProduct);
  };
  // USEFFECT HOOK FUNCTIONALITIES TO RENDER THE DATA
  useEffect(() => {
    const filtered = products.filter((item) =>
      Object.keys(priceRanges).some((rangeKey) => {
        const { min, max, checked } = priceRanges[rangeKey];
        return checked && item.price >= min && item.price <= max;
      })
    );

    setSidebarFilteredProducts(filtered);
  }, [priceRanges]);

  useEffect(() => {
    setSidebarFilteredProducts(
      products.filter((prod) => brandFilters.includes(prod.brand))
    );
    console.log("product brand filter", sidebarFilteredProducts);
  }, [brandFilters]);

  useEffect(() => {
    setSidebarFilteredProducts(
      products.filter((product) => ratingsFilters.includes(product))
    );
  }, [ratingsFilters]);
  // JSX ELEMENT
  return (
    <div className="w-[100%] flex items-baseline gap-1 xsm:flex-col xxsm:flex-row">
      {/* BRAND FILTER */}

      {/* ACCORDION */}
      <Accordion className="w-fit -px-1  h-fit md:w-[150%]">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className="font-inter">BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {brands.map((item, itemIndex) => (
              <FormControlLabel
                control={<Checkbox size="12px" />}
                checked={brandFilters.includes(brands[itemIndex])}
                onChange={() => handleBrandChange(brands[itemIndex])}
                label={brands[itemIndex]}
                value={brands[itemIndex]}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* PRICE RANGE FILTER */}

      {/* ACCORDION */}
      <Accordion className="w-fit -px-1 h-fit md:w-[150%]">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {priceRangesArray.map((range, index) => (
              <FormControlLabel
                control={<Checkbox size="12px" />}
                checked={priceRanges[`range${index + 1}`].checked}
                onChange={() => handlePriceChange(`range${index + 1}`)}
                label={priceRanges[`range${index + 1}`].label}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* RATINGS FILTER */}

      {/* ACCORDION */}
      <Accordion className="w-fit -px-1 h-fit md:w-[150%]">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>RATINGS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col flex-wrap">
            {ratingsArray.map((rating, index) => {
              return (
                <>
                  <FormControlLabel
                    key={index}
                    control={<Checkbox size="12px" />}
                    label={<ReactStars count={rating} value={rating} />}
                    value={rating}
                    onChange={() => handleRatingsChange(rating)}
                  />
                </>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
>>>>>>> 06a5dc1926b9643d723c9e434186a4521f55fcf3
