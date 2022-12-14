/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res?.json())
        .then((categories) => setCategories([...categories]));
    };
    getCategories();
  }, []);

  return (
    <nav className="nav">
      <ul>
        <li key="allProducts">
          <Link to="/products">All Products</Link>
        </li>
        <li key="categories">
          <details>
            <summary>Categories</summary>
            <ul>
              {categories?.map((category) => (
                <li key={category}>
                  <Link to={`products/categories/${category}`}>{category}</Link>
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
