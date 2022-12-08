/** @format */
import { useQuery } from "react-query";

const AllProdcucts = () => {
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    return res.json();
  };

  // fetch products
  const { data } = useQuery("allProducts", getProducts);

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
};

export default AllProdcucts;
