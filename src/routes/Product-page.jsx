/** @format */

import { useState } from "react";
import Header from "../components/Header";

const ProductPage = () => {
  const [Product, setProduct] = useState();

  return (
    <main>
      <Header />
      <p>{Product.title}</p>
    </main>
  );
};

export default ProductPage;
