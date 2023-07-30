import { useContext } from "react";
import { HeadlinesContext } from "../../context/headlines.context";

import Directory from "../../compoments/directory/directory.component";

const Home = () => {
  const { headlinesMap } = useContext(HeadlinesContext);
  console.log("headlines", headlinesMap["headline"])

  return (
    <div>
      {headlinesMap["headline"] && (
        <Directory categories={headlinesMap["headline"]} />
      )}
    </div>
  );
};

export default Home;
