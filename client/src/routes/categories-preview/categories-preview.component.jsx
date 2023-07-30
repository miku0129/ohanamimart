import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../compoments/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {categoriesMap["store"] &&
        categoriesMap["store"].map((category) => {
          return (
            <CategoryPreview
              key={category["store_name"]}
              store_name_lowercase_for_url={
                category["store_name_lowercase_for_url"]
              }
              store_name={category["store_name"]}
              products={category["products"]}
            />
          );
        })}
    </Fragment>
  );
};

export default CategoriesPreview;
