// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { setCategories } from "../store/categories/category.action";
import { selectCategories } from "../store/categories/category.selector";

import SHOP_DATA from "../utils/data/shop-data"

const LoadingResource = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  // useEffect(() => {
  //   const handleSettingCategories = () => {
  //     if (!categories[0]) {
  //       dispatch(setCategories(SHOP_DATA.shops));
  //     }
  //   };
  //   handleSettingCategories();
  // }, [categories, dispatch]);
  const handleSettingCategories = () => {
    if (!categories[0]) {
      dispatch(setCategories(SHOP_DATA.shops));
    }
  };
  handleSettingCategories();
};

export default LoadingResource;
