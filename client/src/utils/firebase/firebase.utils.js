import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

import SHOP_DATA from "../data/shop-data";
import PRODUCT_DATA from "../data/product-data";
import PRODUCT_IMAGE_DATA from "../data/product-image-data";

const app = initializeApp(FIREBASECONFIG);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const analytics_logEvent = logEvent;

//authenticaiton
export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserEmailAndPassword = async (auth, email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

//initial shop data
export const initializeCategoryData_1 = async () => {
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

export const getAllDocuments_1 = async () => {
  const querySnapshot = await getDocs(collection(db, "shops"));
  return querySnapshot.docs.map((docsnapshot) => docsnapshot.data());
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

export const getAllDocuments_2 = async () => {
  const querySnapshot_of_shops = await getDocs(collection(db, "shops_2"));
  let shops = querySnapshot_of_shops.docs.map((docsnapshot) =>
    docsnapshot.data()
  );
  for (let i = 0; i < shops.length; i++) {
    let querySnapshot_of_products_of_the_shop = await getDocs(
      collection(db, "shops_2", String(shops[i].id), "products")
    );
    const products = querySnapshot_of_products_of_the_shop.docs.map((doc) => {
      return doc.data();
    });
    for (let j = 0; j < products.length; j++) {
      let querySnapshot_of_images_of_the_product = await getDocs(
        collection(
          db,
          "shops_2",
          String(shops[i].id),
          "products",
          String(products[j].id),
          "images_of_product"
        )
      );
      const images = querySnapshot_of_images_of_the_product.docs.map((doc) =>
        doc.data()
      );
      products[j] = { ...products[j], product_images: images };
    }
    shops[i] = { ...shops[i], products: products };
  }
  return shops;
};

export const deleteDocument_of_a_product = async (shopId, productId) => {
  try {
    await deleteDoc(
      doc(db, "shops_2", String(shopId), "products", String(productId))
    );
    window.alert(`アイテムの削除に成功しました。`);
    window.location.reload();
  } catch (e) {
    window.alert(`アイテムの削除に失敗しました。Error log: ${e}`);
  }
};

export const addDocument_of_a_product = async (shopId, product, image) => {
  const products_of_the_shop = (await getAllDocuments_2()).filter(
    (shop) => shop.id === shopId
  )[0].products;
  const tailEndId_for_newProduct = getTheTailendId(products_of_the_shop);
  try {
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

    try {
      //当座は1productにつき1画像のみ登録可能とする
      const imageOfNewProduct = {
        id: 0,
        is_main_product_image: true,
        product_id: tailEndId_for_newProduct,
        product_image_url: image.product_image_url,
        shop_id: shopId,
      };
      await setDoc(
        doc(
          db,
          "shops_2",
          String(shopId),
          "products",
          String(tailEndId_for_newProduct),
          "images_of_product",
          "0"
        ),
        imageOfNewProduct
      );
      window.alert("アイテムの登録に成功しました。");
    } catch (e) {
      window.alert(`アイテム画像の登録に失敗しました。Error log: ${e}`);
    }
  } catch (e) {
    window.alert(`アイテムの登録に失敗しました。Error log: ${e}`);
  }
};

export const updateDocument_of_a_product = async (
  shopId,
  product,
  product_id,
  image
) => {
  const productRef = doc(
    db,
    "shops_2",
    String(shopId),
    "products",
    String(product_id)
  );
  try {
    const docSnap_of_product = await getDoc(productRef);
    if (docSnap_of_product.exists()) {
      await updateDoc(productRef, product);
    }
    const ProductImgRef = doc(
      db,
      "shops_2",
      String(shopId),
      "products",
      String(product_id),
      "images_of_product",
      "0"
    );
    try {
      const docSnap_of_img = await getDoc(ProductImgRef);
      if (docSnap_of_img.exists()) {
        await updateDoc(ProductImgRef, image);
      }
      window.alert(`アイテムの更新に成功しました。`);
    } catch (e) {
      window.alert(`アイテム画像の更新に失敗しました。Error log: ${e}`);
    }
  } catch (e) {
    window.alert(`アイテムの更新に失敗しました。Error log: ${e}`);
  }
};
