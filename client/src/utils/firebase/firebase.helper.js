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

//FireStoreにおいてデータは必ずしも追加順に格納されないため
//最後尾のIDを取得するためにソートする必要がある。
export const getTheTailendId = (products) => {
  const array_of_id_of_products = products.map((product) => product.id);
  const sorted_array_of_id_of_products = array_of_id_of_products.sort(
    (a, b) => a - b
  );
  const id_for_the_new_product =
    sorted_array_of_id_of_products[sorted_array_of_id_of_products.length - 1] +
    1;

  return id_for_the_new_product;
};
