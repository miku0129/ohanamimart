import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../compoments/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((category) => {
        const products = categoriesMap[category]["items"];
        return (
          <CategoryPreview
            key={category}
            shopName={category}
            title={categoriesMap[category]["shopName"]}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
