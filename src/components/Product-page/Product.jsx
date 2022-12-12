/** @format */

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let params = useParams();

  // fetch product data using product id
  const getProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    return res.json();
  };

  const { data, status } = useQuery("product", getProduct);

  return (
    <main>
      <p>{data?.title}</p>
    </main>
  );
};

export default ProductPage;
