/** @format */
import { useQuery } from "react-query";
import { Loader } from "./Loader";
import ProductItem from "./Product-item";

const AllProdcucts = () => {
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    return res.json();
  };

  // fetch products
  const { data, status } = useQuery("allProducts", getProducts);

  if (status === "loading") {
    return <Loader />;
  } else if (status === "error") {
    // enable react router to render a nested ErrorPage when response is 404.
    // All routing (including ErrorPage) is managed in the index.js.
    throw new Response("Not Found", { status: 404, statusText: "Not Found" });
  } else {
    return <ProductItem data={data} />;
  }
};

export default AllProdcucts;
