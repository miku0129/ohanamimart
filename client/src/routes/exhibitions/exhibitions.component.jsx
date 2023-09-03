import { Routes, Route } from "react-router-dom";

import ExhibitionPreview from "../../compoments/exhibition-preview/exhibition-preview.component";
import ExhibitionDetail from "../../compoments/exhibition-detail/exhibition-detail.component";

const Exhibitions = () => {

  return (
    <Routes>
      <Route index element={<ExhibitionPreview />} />
      <Route path=":id" element={<ExhibitionDetail />} />
    </Routes>
  );
};

export default Exhibitions;
