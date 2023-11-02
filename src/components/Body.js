import resList from "../utils/mockData";
import ResrtrurantContainer from "./ResrtrurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map((resDataObj) => (
          <ResrtrurantContainer key={resDataObj?.id} resData={resDataObj} />
        ))}
      </div>
    </div>
  );
};
export default Body;
