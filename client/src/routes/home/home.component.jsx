import { useContext } from "react";
import { HeadlinesContext } from "../../context/headlines.context";

import Directory from "../../compoments/directory/directory.component";

const Home = () => {
  const { headlinesMap } = useContext(HeadlinesContext);
  console.log("headlines", headlinesMap["headlines"])

  return (
    <div>
      {headlinesMap["headlines"] && (
        <Directory categories={headlinesMap["headlines"]} />
      )}
    </div>
  );
};

export default Home;
