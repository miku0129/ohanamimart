import EXHIBITIONS_DATA from "./exhibition-data";
import SHOP_DATA from "./shop-data";
import PRODUCT_DATA from "./product-data";
import PRODUCT_IMAGE_DATA from "./product-image-data";

export const get_product_array_for_main_visual = () => {
  const { shops } = SHOP_DATA;
  const { products } = PRODUCT_DATA;
  const { product_images } = PRODUCT_IMAGE_DATA;

  return shops.map((shop) => {
    return product_images
      .filter((product_image) => product_image.shop_id === shop.id)
      .filter((product_image) => product_image.is_product_image_in_main_visual)
      .map((product_image) => {
        const product_info = products.filter(
          (product) => product.id === product_image.product_id
        );

        const main_product_array = {
          ...product_info[0],
          product_image: product_image,
          shop_of_the_product: shop,
        };
        return main_product_array;
      });
  });
};

export const get_product_by_id = (id) => {
  const { shops } = SHOP_DATA;
  const product_arrays = shops.map((shop) =>
    shop.products.filter((product) => product.id === Number(id))
  );
  return product_arrays.filter(
    (product_array) => product_array[0] !== undefined
  )[0][0];
};

export const get_products_of_the_shop_by_shopid = (id) => {
  const { products } = PRODUCT_DATA;
  const { product_images } = PRODUCT_IMAGE_DATA;
  const { shops } = SHOP_DATA;

  return products
    .filter((product) => product.shop_id === id)
    .map((product) => {
      const images_of_product = product_images.filter(
        (product_image) => product_image.product_id === product.id
      );
      const shop_of_the_product = shops.filter((shop) => shop.id === id)[0];
      return {
        ...product,
        product_images: images_of_product,
        shop_of_the_product: shop_of_the_product,
      };
    });
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
