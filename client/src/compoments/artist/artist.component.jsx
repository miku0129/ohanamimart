import "./artist.styles.scss";

const Artist = ({ title, imageUrl, bio }) => {
  return (
      <div className="container-items">
        <h2>{title}</h2>
        <p>{bio}</p>
        <img src={imageUrl} alt={title}/>
      </div>
  );
};

export default Artist;
