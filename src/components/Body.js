import { useState } from "react";
import resList from "../utils/mockData";
import ResrtrurantContainer from "./ResrtrurantCard";

const Body = () => {
  const [resListOfResturant, setResListOfResturant] = useState(resList);
  const updatedResListByTheirRatings = (resList) => {
    const upadatedReslist = resList.filter((res) => res.rating > 4);
    setResListOfResturant(upadatedReslist);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            updatedResListByTheirRatings(resList);
          }}
        >
          Top Rated Resrtrurant
        </button>
      </div>
      <div className="res-container">
        {resListOfResturant?.map((resDataObj) => (
          <ResrtrurantContainer key={resDataObj?.id} resData={resDataObj} />
        ))}
      </div>
    </div>
  );
};
export default Body;
