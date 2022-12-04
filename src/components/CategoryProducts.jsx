/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

const CategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  let params = useParams();

  // fetch category products depending on param value "category name"
  useEffect(() => {
    const getCategoryProducts = () => {
      fetch(`https://dummyjson.com/products/category/${params.categoryName}`)
        .then((res) => res.json())
        .then((data) => {
          setCategoryProducts([...data.products]);
        });
    };
    getCategoryProducts();
  }, [params.categoryName]);

  return <Products products={categoryProducts} />;
};

export default CategoryProducts;
