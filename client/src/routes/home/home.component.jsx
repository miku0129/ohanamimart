// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux/es/hooks/useSelector";

// import { setCategories } from "../../store/categories/category.action";
// import { selectCategories } from "../../store/categories/category.selector";

import Directory from "../../compoments/directory/directory.component";

// import SHOP_DATA from "../../utils/data/shop-data";

const Home = () => {
  // const dispatch = useDispatch();
  // const categories = useSelector(selectCategories);

  // const handleSettingCategories = () => {
  //   if (!categories[0]) {
  //     dispatch(setCategories(SHOP_DATA.shops));
  //   }
  // };
  // handleSettingCategories();

  return (
    <div>
      <Directory />
    </div>
  );
};

export default Home;
