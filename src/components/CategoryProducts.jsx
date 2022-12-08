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
