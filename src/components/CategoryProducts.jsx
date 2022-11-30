/** @format */

import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  return (
    <div className="main__products">
      <ul>
        {categoryProducts.map((product) => (
          <li>
            <a href="">{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
