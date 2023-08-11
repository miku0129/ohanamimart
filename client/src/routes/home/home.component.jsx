import { useContext } from "react";
import { HeadlinesContext } from "../../context/headlines.context";

import Directory from "../../compoments/directory/directory.component";

const Home = () => {
  const { headlinesArray } = useContext(HeadlinesContext);

  return (
    <div>{headlinesArray && <Directory categories={headlinesArray} />}</div>
  );
};

export default Home;
