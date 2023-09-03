import { useContext } from "react";
import { ExhibitionsContext } from "../../context/exhibitions.context";

// import ExhibitionPreview from "../../compoments/exhibition-preview/exhibition-preview.component";

const Evenements = () => {
  const { exhibitionsMap } = useContext(ExhibitionsContext);

  // return <ExhibitionPreview exhibitionsMap={exhibitionsMap} />;
  return <div>events</div>
};

export default Evenements;
