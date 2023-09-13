import { FirebaseError, initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import FIREBASECONFIG from "./firebase.config";
import { firestore as db } from "./firebase.utils";
import SHOP_DATA from "../data/shop-data";
import PRODUCT_DATA from "../data/product-data";
import PRODUCT_IMAGE_DATA from "../data/product-image-data";
import EXHIBITIONS_DATA from "../data/exhibition-data";

const app = initializeApp(FIREBASECONFIG);
export const firestore = getFirestore(app);

export const getAllDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "shops"));
  return querySnapshot.docs.map((docsnapshot) => docsnapshot.data());
};

export const initializeCategoryData = async () => {
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
      });
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

export const initializeExhibitionData = async () => {
  const { exhibitions } = EXHIBITIONS_DATA;

  exhibitions.forEach(async (exhibition, idx) => {
    const exhibition_id = String(idx);
    const docRef = doc(db, "exhibitions", exhibition_id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, "exhibitions", exhibition_id), {
          id: idx,
          exhibition_title: exhibition.exhibition_title,
          start_date: exhibition.start_date,
          end_date: exhibition.end_date,
          start_time: exhibition.start_time,
          end_time: exhibition.end_time,
          location: exhibition.location,
          address: exhibition.address,
          exhibition_image_url: exhibition.exhibition_image_url,
          exhibitors: exhibition.exhibitors,
          about_exhibition: exhibition.about_exhibition,
          exhibition_url: exhibition.exhibition_url,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};
