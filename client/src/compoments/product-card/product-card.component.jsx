import "./product-card.styles.scss";

const ProductCard = ({ product }) => {

  const { product_name, product_price, product_image_url } = product;

  const name = product_name.length < 35 ? product_name : product_name.slice(0, 35) + "...";

  return (
    <div className="product-card-container">
      <img src={product_image_url} alt={`${product_name}`} />
      <div className="product-card-footer">
        <span className="name">{name}</span>
        {product_price && <span className="price">{product_price}&euro;</span>}
      </div>
    </div>
  );
};

export default ProductCard;
