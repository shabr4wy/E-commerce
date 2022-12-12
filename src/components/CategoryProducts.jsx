/** @format */

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

const CategoryProducts = () => {
  let params = useParams();

  // fetch category products depending on param value "category name"
  const getCategoryProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${params.categoryName}`
    );
    return res.json();
  };

  const { data, status } = useQuery(
    ["categoryProducts", params],
    getCategoryProducts
  );

  if (status === "loading") {
    return <Loader />;
  } else if (status === "error") {
    // enable react router to render a nested ErrorPage when response is 404
    // All routing (including ErrorPage) is managed in the index.js
    throw new Response("Not Found", { status: 404, statusText: "Not Found" });
  }
  // handle empty respons that is caused by fetch call of non-existed category products.
  else if (!data?.products?.length) {
    throw new Response("Not Found", {
      statusText: `we don't have "${params.categoryName}" products in our store for now. We will consider it in future upgrades.`,
    });
  } else {
    return (
      <main className="main">
        <div className="main__products">
          <ul>
            {data?.products?.map((product) => (
              <li key={product?.title}>
                <a href="">{product?.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
};

export default CategoryProducts;
