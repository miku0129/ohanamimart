import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const initializeCategoryData = async () => {
  const { shops_test } = SHOP_DATA;
  shops_test.forEach(async (shop, idx) => {
    const shop_id = String(idx);
    const shopDocRef = doc(db, "shops_test", shop_id);
    const shopDocSnap = await getDoc(shopDocRef);

    if (!shopDocSnap.exists()) {
      try {
        await setDoc(doc(db, "shops_test", shop_id), {
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
            "shops_test",
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
                doc(db, "shops_test", shop_id, "products", product_id),
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
                  "shops_test",
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
                        "shops_test",
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
  const querySnapshot_of_shops = await getDocs(collection(db, "shops_test"));
  let shops_test = querySnapshot_of_shops.docs.map((docsnapshot) =>
    docsnapshot.data()
  );
  for (let i = 0; i < shops_test.length; i++) {
    let querySnapshot_of_products_of_the_shop = await getDocs(
      collection(db, "shops_test", String(shops_test[i].id), "products")
    );
    const products = querySnapshot_of_products_of_the_shop.docs.map((doc) => {
      return doc.data();
    });
    for (let j = 0; j < products.length; j++) {
      let querySnapshot_of_images_of_the_product = await getDocs(
        collection(
          db,
          "shops_test",
          String(shops_test[i].id),
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
    shops_test[i] = { ...shops_test[i], products: products };
  }
  return shops_test;
};

export const deleteDocument_of_a_product = async (shopId, productId) => {
  try {
    await deleteDoc(
      doc(db, "shops_test", String(shopId), "products", String(productId))
    );
    window.alert(`アイテムの削除に成功しました。`);
    window.location.reload();
  } catch (e) {
    window.alert(`アイテムの削除に失敗しました。Error log: ${e}`);
  }
};

export const addDocument_of_a_product = async (shopId, product, image) => {
  const products_of_the_shop = (await getAllDocuments()).filter(
    (shop) => shop.id === shopId
  )[0].products;
  const tailEndId_for_newProduct = getTheTailendId(products_of_the_shop);
  try {
    product = { ...product, id: tailEndId_for_newProduct };
    await setDoc(
      doc(
        db,
        "shops_test",
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
          "shops_test",
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
    "shops_test",
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
      "shops_test",
      String(shopId),
      "products",
      String(product_id),
      "images_of_product",
      "0"
    );

    //フォームで更新前のアイテムの画像urlを表示させるため
    //画像urlの更新を行わず更新ボタンを押下するとデータがdbに正しく挿入されない。
    //データを正しく上書きし更新できるようにする
    if (Array.isArray(image.product_image_url)) {
      image = {
        ...image,
        product_image_url: image.product_image_url[0].product_image_url,
      };
    }

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
