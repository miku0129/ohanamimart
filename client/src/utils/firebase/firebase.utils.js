import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import FIREBASECONFIG from "./firebase.config";
import { firestore as db } from "./firebase.utils";

//To initialize shop data
import SHOP_DATA from "../data/shop-data";
import PRODUCT_DATA from "../data/product-data";
import PRODUCT_IMAGE_DATA from "../data/product-image-data";

const app = initializeApp(FIREBASECONFIG);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const analytics_logEvent = logEvent;

const makeProductsArray = (index) => {
  const { products } = PRODUCT_DATA;
  const { product_images } = PRODUCT_IMAGE_DATA;

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

export const initializeCategoryData = async () => {
  const { shops } = SHOP_DATA;

  shops.forEach(async (shop, idx) => {
    const shop_id = String(idx);
    const docRef = doc(db, "shops", shop_id);
    const docSnap = await getDoc(docRef);

    let products_array = makeProductsArray(idx);

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

          shop_email: shop.shop_email,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};

export const getAllDocuments = async () => {
  const querySnapshot_of_shops = await getDocs(collection(db, "shops_2"));
  let shops = querySnapshot_of_shops.docs.map((docsnapshot) =>
    docsnapshot.data()
  );

  for (let i = 0; i < shops.length; i++) {
    let querySnapshot_of_products = await getDocs(
      collection(db, "shops_2", String(shops[i].id), "products")
    );
    const products = querySnapshot_of_products.docs.map((doc) => {
      return doc.data();
    });
    shops[i] = { ...shops[i], products: products };
  }
  return shops;
};

export const initializeCategoryData_2 = async () => {
  const { shops } = SHOP_DATA;
  shops.forEach(async (shop, idx) => {
    const shop_id = String(idx);
    const docRef = doc(db, "shops_2", shop_id);
    const docSnap = await getDoc(docRef);
    const products_array = makeProductsArray(idx);

    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, "shops_2", shop_id), {
          id: idx,
          shop_name: shop.shop_name,
          shop_name_lowercase_no_spaces_for_url:
            shop.shop_name_lowercase_no_spaces_for_url,
          shop_icon_url: shop.shop_icon_url,
          shop_website_url: shop.shop_website_url,
          shop_purchase_website_url: shop.shop_purchase_website_url,
          shop_headline: shop.shop_headline,
          shop_intro_text: shop.shop_intro_text,

          shop_email: shop.shop_email,
        });

        console.log("products_array", products_array);
        products_array.forEach(async (product, idx) => {
          console.log("products", product)
          const docRref_of_products = doc(
            db,
            "shops_2",
            shop_id,
            "products",
            idx
          );
          const docSnap_of_products = await getDoc(docRref_of_products);
          if (!docSnap_of_products.exists()) {
            // const productsCollection = collection(
            //   db,
            //   "shops_2",
            //   String(shop.id),
            //   "products",
            //   idx
            // );
            try {
              await setDoc(
                doc(db, "shops_2", shop_id, "products", idx),
                product
              );
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};

export const deleteDocument = async (shopId, productId) => {
  const prods = await getAllDocuments();
  const products_of_the_shop = prods
    .filter((shop) => shop.id === shopId)[0]
    .products.filter((product) => product.id === productId);
  console.log(products_of_the_shop);
};
