/** @format */

import { useEffect, useState } from "react";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((categories) => setCategories([...categories]));
    };
    getCategories();
  }, [categories]);

  return (
    <nav className="nav">
      <ul>
        <li key="allProducts">
          <a>All Products</a>
        </li>
        <li key="categories">
          <details>
            <summary>Categories</summary>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <a href="">{category}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
