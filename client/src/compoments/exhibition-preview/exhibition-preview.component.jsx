import ExhibitionCard from "../exhibition-card/exhibition-card.component";
import "./exhibition-preview.styles.scss";

const ExhibitionPreview = ({ exhibitions }) => {
  console.log(exhibitions);
  return (
    <>
      {exhibitions &&
        exhibitions.map((exhibition) => {
          return <ExhibitionCard exhibition={exhibition} />;
        })}
    </>
  );
};

export default ExhibitionPreview;
