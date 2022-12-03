/** @format */

import { useEffect, useState } from "react";
import Products from "./Products";

const CategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  return <Products products={categoryProducts} />;
};

export default CategoryProducts;
