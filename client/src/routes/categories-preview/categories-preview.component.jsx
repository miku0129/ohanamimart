import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <Fragment>
      {categories &&
        categories.filter((_, idx)=> idx < 4).map((category) => {
          return (
            <CategoryPreview
              key={category["shop_name"]}
              shop_name_lowercase_no_spaces_for_url={
                category["shop_name_lowercase_no_spaces_for_url"]
              }
              shop_name={category["shop_name"]}
              products={category["products"]}
            />
          );
        })}
    </Fragment>
  );
};

export default CategoriesPreview;
