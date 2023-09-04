import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { setCategories } from "../../store/categories/category.action";
import { selectCategories } from "../../store/categories/category.selector";

import Directory from "../../compoments/directory/directory.component";

import SHOPS_DATA from "../../utils/data/shops-data";

const Home = () => {
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
    <div>
      <Directory />
    </div>
  );
};

export default Home;
