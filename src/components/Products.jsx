/** @format */

const Products = ({ products }) => {
  return (
    <main className="main">
      <div className="main__products">
        <ul>
          {products?.map((product) => (
            <li key={product?.title}>
              <a href="">{product?.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Products;
