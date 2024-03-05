import { Routes, Route } from "react-router-dom";

import Category from "../../compoments/category/category.component"
import ProductDetail from "../../compoments/product-detail/product-detail.component";

const Items = () => {
  return (
    <Routes>
      {/* <Route index element={<Category />} /> */}
      <Route path=":product_id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Items;