import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import ResrtrurantContainer from "./ResrtrurantCard";

const Body = () => {
  const [resListOfResturant, setResListOfResturant] = useState([]);
  useEffect(() => {
    fetchResturants();
  }, []);

  const fetchResturants = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    // console.log(json?.data?.cards);
    console.log(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResListOfResturant(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resListOfResturant.length === 0) {
    return <h1>Loading.........</h1>;
  }

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
        {resListOfResturant?.map((resDataObj, i) => (
          <ResrtrurantContainer
            key={resDataObj?.info?.id}
            resData={resDataObj}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
