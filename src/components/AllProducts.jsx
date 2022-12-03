/** @format */

import Products from "./Products";
import { useEffect, useState } from "react";

const AllProdcucts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((res) => res.json())
        .then((data) => {
          setProducts([...data?.products]);
        });
    };
    getProducts();
  }, []);

  return <Products products={products} />;
};

export default AllProdcucts;
