/** @format */

import { useEffect, useState } from "react";

const AllProdcucts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((res) => res.json())
        .then((data) => {
          setProducts([...data.products]);
        });
    };
    getProducts();
  }, [products]);

  return <div className="main__products"></div>;
};

export default AllProdcucts;
