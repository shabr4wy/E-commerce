/** @format */

import { useEffect, useState } from "react";

const AllProdcucts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((res) => res.json())
        .then((data) => {
          setProducts([...data?.products]);
        });
    };
    getProducts();
  }, []);

  console.log(products);

  return (
    <main className="main">
      <div className="main__allProducts">
        <ul>
          {products?.map((product) => (
            <li key={product?.name}>
              <a href="">{product?.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AllProdcucts;
