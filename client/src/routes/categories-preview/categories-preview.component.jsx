import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <Fragment>
      {categories &&
        categories.map((category) => {
          return (
            <CategoryPreview
              key={category["store_name"]}
              store_name_lowercase_no_spaces_for_url={
                category["store_name_lowercase_no_spaces_for_url"]
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
