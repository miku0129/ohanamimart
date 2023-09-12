import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/category.selector";
import { get_products_of_the_shop_by_shopid } from "../../utils/data/data.utils";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <Fragment>
      {categories &&
        categories
          .filter((_, idx) => idx < 4)
          .map((category) => {
            return (
              <CategoryPreview
                key={category["shop_name"]}
                shop_name_lowercase_no_spaces_for_url={
                  category["shop_name_lowercase_no_spaces_for_url"]
                }
                shop_name={category["shop_name"]}
                products={get_products_of_the_shop_by_shopid(category["id"])}
              />
            );
          })}
    </Fragment>
  );
};

export default CategoriesPreview;
