import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  // console.log("categories: ", categories)

  return (
    <Fragment>
      {categories &&
        categories
          .filter((_, idx) => idx !== 4) // shop_id 4 はプロダクトのイメージが無いためカタログから外す )
          .map((category) => {
            return (
              <CategoryPreview
                key={category["shop_name"]}
                category={category}
              />
            );
          })}
    </Fragment>
  );
};

export default CategoriesPreview;
