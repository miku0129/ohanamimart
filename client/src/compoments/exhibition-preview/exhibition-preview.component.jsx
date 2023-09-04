import { Fragment } from "react";
import { useContext } from "react";

import ExhibitionCard from "../exhibition-card/exhibition-card.component";

import { ExhibitionsContext } from "../../context/exhibitions.context";

import { PreviewOneItemsInALine } from "../../component-utils/component-utils.styles";
import "./exhibition-preview.styles.scss";

const ExhibitionPreview = () => {
  const { exhibitions } = useContext(ExhibitionsContext);
  console.log(exhibitions);
  return (
    <Fragment>
      <div className="exhibitions-container">
        <PreviewOneItemsInALine>
          {exhibitions &&
            exhibitions.map((exhibition) => {
              return <ExhibitionCard exhibition={exhibition} />;
            })}
        </PreviewOneItemsInALine>
      </div>
    </Fragment>
  );
};

export default ExhibitionPreview;
