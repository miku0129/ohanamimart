import ProductCard from "../../compoments/product-card/product-card.component";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    if (categoriesMap[category]) {
      setShopName(categoriesMap[category]["shopName"]);
      setProducts(categoriesMap[category]["items"]);
    }
  }, [category, categoriesMap]);


  return (
    <div className="category-container">
      <h2>
        {shopName && <span className="title">{shopName.toUpperCase()}</span>}
      </h2>
      <div className="category-subcontainer">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
