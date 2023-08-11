import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import Upcomings from "../upcomings/upcomings.component";

import { setCategories } from "../../store/categories/category.action";
import { selectCategories } from "../../store/categories/category.selector";

import "./shop.styles.scss";
import SHOPS_DATA from "../../utils/data/shops-data";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    const handleSettingCategories = () => {
      if (!categories[0]) {
        dispatch(setCategories(SHOPS_DATA.shops));
      }
    };
    handleSettingCategories();
  }, [categories, dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path="/upcomings" element={<Upcomings />} />
    </Routes>
  );
};

export default Shop;
