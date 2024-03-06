export const makeProductsArray_for_initializeCategoryData = (
  index,
  product_data,
  product_image_data
) => {
  const { products } = product_data;
  const { product_images } = product_image_data;

  let products_array =
    products.length > 0
      ? products.filter((product) => product.shop_id === index)
      : null;
  if (products_array !== null) {
    products_array = products_array.map((product) => {
      const images = product_images.filter(
        (image) => image.product_id === product.id
      );
      const result = { ...product, product_images: images };
      return result;
    });
  }
  return products_array;
};
