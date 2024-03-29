export const makeArrayOfProductsForTheShop = (shopId, product_data) => {
  const { products } = product_data;

  let products_array =
    products.length > 0
      ? products.filter((product) => product.shop_id === shopId)
      : null;
  return products_array;
};

export const makeArrayOfImagesForTheProduct = (
  productId,
  product_image_data
) => {
  const { product_images } = product_image_data;
  const images_array = product_images.filter(
    (image) => image.product_id === productId
  );
  return images_array;
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
