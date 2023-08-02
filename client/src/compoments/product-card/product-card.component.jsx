import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { product_name, product_price, product_image_url } = product;
  return (
    <div className="product-card-container">
      <img src={product_image_url} alt={`${product_name}`} />
      <div className="product-card-footer">
        <span className="name">{product_name}</span>
        {product_price && <span className="price">{product_price}&euro;</span>}
      </div>
    </div>
  );
};

export default ProductCard;
