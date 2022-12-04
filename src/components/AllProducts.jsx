/** @format */

import Products from "./Products";
import { useEffect, useState } from "react";

const AllProdcucts = () => {
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCategoryProducts = () => {
      fetch("https://dummyjson.com/products?limit=10", signal)
        .then((res) => res.json())
        .then((data) => {
          setProducts([...data.products]);
        });
    };
    getCategoryProducts();

    return () => {
      // cancel the request before component unmounts
      controller.abort();
      console.log(signal);
    };
  }, []);

  return <Products products={products} />;
};

export default AllProdcucts;
