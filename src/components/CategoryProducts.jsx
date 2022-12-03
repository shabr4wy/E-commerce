/** @format */

import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  return (
    <main>
      <div className="main__products">
        <ul>
          {categoryProducts.map((product) => (
            <li>
              <a href="">{product.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CategoryProducts;
