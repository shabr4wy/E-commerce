/** @format */

import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  return (
    <main className="main">
      <div className="main__products">
        <ul>
          {data?.products?.map((product) => (
            <li key={product?.title}>
              <Link to={`/product/${product?.id}`}>{product?.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProductItem;
