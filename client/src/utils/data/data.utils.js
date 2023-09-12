import EXHIBITIONS_DATA from "./exhibition-data";
import SHOP_DATA from "./shop-data";
import PRODUCT_DATA from "./product-data";
import PRODUCT_IMAGE_DATA from "./product-image-data";

export const getCategoriesMap = () => {
  const { shops } = SHOP_DATA;
  const { products } = PRODUCT_DATA;
  const { product_images } = PRODUCT_IMAGE_DATA;

  return shops.map((shop) => {
    const prods = products.filter((prod) => prod.shop_id === shop.id);
    const prods_of_the_shop = prods.map((prod) => {
      const imgs = product_images.filter((img) => img.product_id === prod.id);
      const result = { ...prod, product_images: imgs };
      return result;
    });

    const result = { ...shop, products: prods_of_the_shop };
    return result;
  });
};

export const get_product_array_for_main_visual = () => {
  const categoriesMap = getCategoriesMap();
  const filteredShops = categoriesMap.filter(
    (category) =>
      category.products.filter(
        (prod) => prod.is_product_image_used_in_main_visual
      ).length > 0
  );
  return filteredShops.map(
    (shop) =>
      shop.products.filter(
        (prod) => prod.is_product_image_used_in_main_visual
      )[0]
  );
};

export const get_product_by_id = (id) => {
  const search_id = Number(id);
  const categoriesMap = getCategoriesMap();
  const filteredShop = categoriesMap.filter((category) => {
    const result = category.products.filter((prod) => prod.id === search_id);
    return result.length > 0;
  })[0];

  const result = filteredShop.products.filter(
    (prod) => prod.id === search_id
  )[0];
  return result;
};

export const get_products_of_the_shop_by_shopid = (id) => {
  const categoriesMap = getCategoriesMap();
  return categoriesMap.filter((category) => {
    return category.id === id;
  })[0].products;
};

export const get_exhibitions_array = () => {
  const { exhibitions } = EXHIBITIONS_DATA;
  const { shops } = SHOP_DATA;

  return exhibitions
    .filter((exhibition) => {
      const endDateOfExhibition = new Date(exhibition.end_date);
      const today = new Date();
      return endDateOfExhibition >= today;
    })
    .map((exhibition) => {
      const exhibitors = exhibition.exhibitors.map(
        (exhibitor) => shops.filter((shop) => shop.shop_name === exhibitor)[0]
      );
      return { ...exhibition, exhibitors: exhibitors };
    });
};
