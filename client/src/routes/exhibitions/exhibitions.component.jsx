import { useContext } from "react";
import { ExhibitionsContext } from "../../context/exhibitions.context";

import ExhibitionPreview from "../../compoments/exhibition-preview/exhibition-preview.component";

const Exhibitions = () => {
  const { exhibitions } = useContext(ExhibitionsContext);

  return <ExhibitionPreview exhibitions={exhibitions} />;
};

export default Exhibitions;
