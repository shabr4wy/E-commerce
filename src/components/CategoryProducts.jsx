/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  let params = useParams();

  // fetch category products depending on param value "category name"
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCategoryProducts = () => {
      fetch(
        `https://dummyjson.com/products/category/${params.categoryName}`,
        signal
      )
        .then((res) => res.json())
        .then((data) => {
          setCategoryProducts([...data.products]);
        });
    };
    getCategoryProducts();

    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [params.categoryName]);

  return (
    <main className="main">
      <div className="main__products">
        <ul>
          {categoryProducts?.map((product) => (
            <li key={product?.title}>
              <a href="">{product?.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CategoryProducts;
