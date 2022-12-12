/** @format */

import { useParams } from "react-router-dom";

const ProductPage = () => {
  let params = useParams();

  return (
    <main>
      <p>{data?.productName}</p>
    </main>
  );
};

export default ProductPage;
