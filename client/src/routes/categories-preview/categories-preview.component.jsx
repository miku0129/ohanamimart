import { Fragment, useContext } from "react";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";

import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const categories = useContext(CategoriesContext);

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
