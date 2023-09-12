import {
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore/lite";
import { firestore as db } from "./firebase.utils";
import SHOP_DATA from "../data/shop-data";
import PRODUCT_DATA from "../data/product-data";
import PRODUCT_IMAGE_DATA from "../data/product-image-data";

export const initializeData = async () => {
  const { shops } = SHOP_DATA;
  const { products } = PRODUCT_DATA;
  const { product_images } = PRODUCT_IMAGE_DATA;

  shops.forEach(async (shop, idx) => {
    const shop_id = String(idx);
    const docRef = doc(db, "shops", shop_id);
    const docSnap = await getDoc(docRef);
    let products_array =
      products.length > 0
        ? products.filter((product) => product.shop_id === idx)
        : null;
    if (products_array !== null) {
      products_array = products_array.map((product) => {
        const images = product_images.filter(
          (image) => image.product_id === product.id
        );
        const result = { ...product, product_images: images };
        return result;
      }
      );
    }

    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, "shops", shop_id), {
          id: idx,
          shop_name: shop.shop_name,
          shop_name_lowercase_no_spaces_for_url:
            shop.shop_name_lowercase_no_spaces_for_url,
          shop_icon_url: shop.shop_icon_url,
          shop_website_url: shop.shop_website_url,
          shop_purchase_website_url: shop.shop_purchase_website_url,
          shop_headline: shop.shop_headline,
          shop_intro_text: shop.shop_intro_text,
          products: products_array,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};
