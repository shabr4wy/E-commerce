/** @format */

import { useState } from "react";
import Header from "../components/Header";

const Product = () => {
  const [Product, setProduct] = useState();

  return (
    <main>
      <Header />
      <p>{Product.title}</p>
    </main>
  );
};
