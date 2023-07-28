import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-card-footer">
        <span className="name">{name}</span>
        <span className="price">{price}&euro;</span>
      </div>
    </div>
  );
};

export default ProductCard;
