import { Routes, Route } from "react-router-dom";

import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import AboutusPreview from "../aboutus-preview/aboutus-preview.component.jsx";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path="/aboutus" element={<AboutusPreview />} />
    </Routes>
  );
};

export default Shop;
