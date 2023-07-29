import { useContext } from "react";
import { ExhibitionsContext } from "../../context/exhibitions.context";

import ExhibitionPreview from "../../compoments/exhibition-preview/exhibition-preview.component";


const Upcomings = () => {
  const { exhibitionsMap } = useContext(ExhibitionsContext);

  return <ExhibitionPreview exhibitionsMap={exhibitionsMap} />;
};

export default Upcomings;
