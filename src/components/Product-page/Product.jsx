/** @format */

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader";

const Product = () => {
  let params = useParams();

  // fetch product data using product id
  const getProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    return res.json();
  };

  const { data, status } = useQuery("product", getProduct);

  if (status === "loading") {
    return <Loader />;
  }
  return (
    <main>
      <p>{data?.title}</p>
    </main>
  );
};

export default Product;
