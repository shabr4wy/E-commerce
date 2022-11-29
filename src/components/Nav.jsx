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
        <li>
          <a>All Products</a>
        </li>
        <li>
          <details>
            <summary>Categories</summary>
            <ul>
              {categories.map((category) => (
                <li>
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
