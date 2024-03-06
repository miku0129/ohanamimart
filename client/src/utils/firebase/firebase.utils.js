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

import { makeProductsArray_for_initializeCategoryData } from "./firebase.helper";

//initial shop data
import SHOP_DATA from "../data/shop-data";
import PRODUCT_DATA from "../data/product-data";
import PRODUCT_IMAGE_DATA from "../data/product-image-data";

const app = initializeApp(FIREBASECONFIG);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const analytics_logEvent = logEvent;

export const initializeCategoryData = async () => {
  const { shops } = SHOP_DATA;

  shops.forEach(async (shop, idx) => {
    const shop_id = String(idx);
    const docRef = doc(db, "shops", shop_id);
    const docSnap = await getDoc(docRef);

    let products_array = makeProductsArray_for_initializeCategoryData(
      idx,
      PRODUCT_DATA,
      PRODUCT_IMAGE_DATA
    );

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

export const initializeCategoryData_2 = async () => {
  const { shops } = SHOP_DATA;
  shops.forEach(async (shop, idx) => {
    const shop_id = String(idx);
    const docRef = doc(db, "shops_2", shop_id);
    const docSnap = await getDoc(docRef);
    let products_array = makeProductsArray_for_initializeCategoryData(
      idx,
      PRODUCT_DATA,
      PRODUCT_IMAGE_DATA
    );

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

        products_array.forEach(async (product, idx) => {
          const docRref_of_products = doc(
            db,
            "shops_2",
            String(shop_id),
            "products",
            String(idx)
          );
          const docSnap_of_products = await getDoc(docRref_of_products);
          if (!docSnap_of_products.exists()) {
            try {
              await setDoc(
                doc(db, "shops_2", String(shop_id), "products", String(idx)),
                { ...product, id: idx }
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

export const deleteDocument_of_a_product = async (shopId, productId) => {
  await deleteDoc(
    doc(db, "shops_2", String(shopId), "products", String(productId))
  );
  window.location.reload();
};

export const addDocument_of_a_product = async (shopId, product) => {
  const products_of_the_shop = (await getAllDocuments()).filter(
    (shop) => shop.id === shopId
  )[0].products;
  //FireStoreにおいてデータは必ずしも追加順に格納されないため
  //最後尾のIDを取得するためにソートする必要がある。
  const array_of_id_of_products = products_of_the_shop.map(
    (product) => product.id
  );
  const sorted_array_of_id_of_products = array_of_id_of_products.sort(
    (a, b) => a - b
  );
  const id_for_the_new_product =
    sorted_array_of_id_of_products[sorted_array_of_id_of_products.length - 1] +
    1;
  product = { ...product, id: id_for_the_new_product };

  await setDoc(
    doc(
      db,
      "shops_2",
      String(shopId),
      "products",
      String(id_for_the_new_product)
    ),
    product
  );
  console.log(product);
};
