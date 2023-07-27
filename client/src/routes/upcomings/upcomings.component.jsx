import { useContext } from "react";
import { ExhibitionContext } from "../../context/exhibition.context";

import ExhibitionPreview from "../../compoments/exhibition-preview/exhibition-preview.component";


const Upcomings = () => {
  const { exhibitionMap } = useContext(ExhibitionContext);

  return <ExhibitionPreview exhibitionMap={exhibitionMap} />;
};

export default Upcomings;
