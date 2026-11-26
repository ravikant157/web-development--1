const Comp4 = (props) => {
  const { productname, productprice, productcategory } = props;

  return (
    <>
      <h2>Product Details</h2>

      <p>Product Name: {productname}</p>

      <p>Product Price: {productprice}</p>

      <p>Product Category: {productcategory}</p>
    </>
  );
};

export default Comp4;