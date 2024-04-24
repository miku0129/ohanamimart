import EXHIBITIONS_DATA from "./exhibition-data";
import SHOP_DATA from "./shop-data";

export const get_product_array_for_main_visual = (categoriesArray) => {
  const filteredShops = categoriesArray.filter((category) => {
    return (
      category.products.filter((prod) => {
        return prod.is_product_image_used_in_main_visual;
      }).length > 0
    );
  });
  return filteredShops.map(
    (shop) =>
      shop.products.filter(
        (prod) => prod.is_product_image_used_in_main_visual
      )[0]
  );
};

export const get_product_by_id = (categoriesArray, shopId, productId) => {
  shopId = Number(shopId);
  productId = Number(productId);
  return categoriesArray
    .filter((category) => category.id === shopId)[0]
    .products.filter((product) => product.id === productId)[0];
};

export const get_shop_by_id = (categoriesArray, id) => {
  id = Number(id);
  return categoriesArray.filter((shop) => shop.id === id)[0];
};

export const get_exhibitions_array = () => {
  const { exhibitions } = EXHIBITIONS_DATA;
  const { shops_test } = SHOP_DATA;

  return exhibitions
    .filter((exhibition) => {
      const endDateOfExhibition = new Date(exhibition.end_date);
      const today = new Date();
      return endDateOfExhibition >= today;
    })
    .map((exhibition) => {
      const exhibitors = exhibition.exhibitors.map(
        (exhibitor) =>
          shops_test.filter((shop) => shop.shop_name === exhibitor)[0]
      );
      return { ...exhibition, exhibitors: exhibitors };
    });
};
