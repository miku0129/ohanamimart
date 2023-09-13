import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { setCategories } from "../store/categories/category.action";
import { selectCategories } from "../store/categories/category.selector";

import { getAllDocuments } from "../utils/firebase/firebase.utils";

const LoadingResource = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const handleSettingCategories = async () => {
    if (!categories[0]) {
      const data = await getAllDocuments();
      dispatch(setCategories(data));
    }
  };
  handleSettingCategories();
};

export default LoadingResource;
