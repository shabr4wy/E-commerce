/** @format */

const ProductItem = ({ data }) => {
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

export default ProductItem;
