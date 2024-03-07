import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore/lite";
import FIREBASECONFIG from "./firebase.config";
import { firestore as db } from "./firebase.utils";

import {
  makeProductsArray_for_initializeCategoryData,
  makeArrayOfProductsForTheShop,
  makeArrayOfImagesForTheProduct,
  getTheTailendId,
} from "./firebase.helper";

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
    const shopDocRef = doc(db, "shops_2", shop_id);
    const shopDocSnap = await getDoc(shopDocRef);

    if (!shopDocSnap.exists()) {
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

        let products_array = makeArrayOfProductsForTheShop(
          idx, //各shopのid
          PRODUCT_DATA
        );

        products_array.forEach(async (product, idx) => {
          const product_id = String(idx);
          const productDocRef = doc(
            db,
            "shops_2",
            shop_id,
            "products",
            product_id
          );
          const productDocSnap = await getDoc(productDocRef);
          if (!productDocSnap.exists()) {
            try {
              //productのimageとの照合に使用
              const productIdOfSourceFile = product.id;
              //もとのIDをfirestore用に上書きする
              product = {
                ...product,
                id: idx,
                productIdOfSourceFile: productIdOfSourceFile,
              };
              await setDoc(
                doc(db, "shops_2", shop_id, "products", product_id),
                product
              );

              let productImages_array = makeArrayOfImagesForTheProduct(
                productIdOfSourceFile,
                PRODUCT_IMAGE_DATA
              );
              productImages_array.forEach(async (image, idx) => {
                const product_image_id = String(idx);
                const productImgDocRef = doc(
                  db,
                  "shops_2",
                  shop_id,
                  "products",
                  product_id,
                  "images_of_product",
                  product_image_id
                );
                const productImgDocSnap = await getDoc(productImgDocRef);
                if (!productImgDocSnap.exists()) {
                  try {
                    await setDoc(
                      doc(
                        db,
                        "shops_2",
                        shop_id,
                        "products",
                        product_id,
                        "images_of_product",
                        product_image_id
                      ),
                      //もとのIDをfirestore用に上書きする
                      {
                        ...image,
                        id: idx,
                        productIdOfSourceFile: productIdOfSourceFile,
                      }
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

  const tailEndId_for_newProduct = getTheTailendId(products_of_the_shop);

  product = { ...product, id: tailEndId_for_newProduct };

  await setDoc(
    doc(
      db,
      "shops_2",
      String(shopId),
      "products",
      String(tailEndId_for_newProduct)
    ),
    product
  );
  console.log(`new product: ${product}`);
};

export const updateDocument_of_a_product = async (shopId, product_id, data) => {
  const targetProductRef = doc(
    db,
    "shops_2",
    String(shopId),
    "products",
    String(product_id)
  );
  const docSnap = await getDoc(targetProductRef);
  if (docSnap.exists()) {
    await updateDoc(targetProductRef, data);
  }
};
