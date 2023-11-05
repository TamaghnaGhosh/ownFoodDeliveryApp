import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import ResrtrurantContainer from "./ResrtrurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListOfResturant, setResListOfResturant] = useState([]);
  const [filterRestrurantS, setFilterResturantS] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchResturants();
  }, []);

  const fetchResturants = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResListOfResturant(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterResturantS(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering
  // if (resListOfResturant?.length === 0) {
  //   return <Shimmer />;
  // }

  const updatedResListByTheirRatings = (resList) => {
    const upadatedReslist = resList.filter((res) => res?.info?.avgRating > 4.3);
    setFilterResturantS(upadatedReslist);
  };

  return resListOfResturant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Resturants"
            name="search"
            autoComplete="false"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              // console.log(searchText);
              const filterRestrurant = resListOfResturant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterRestrurant);
              setFilterResturantS(filterRestrurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            updatedResListByTheirRatings(resListOfResturant);
          }}
        >
          Top Rated Resrtrurant
        </button>
      </div>
      <div className="res-container">
        {filterRestrurantS?.map((resDataObj, i) => (
          <ResrtrurantContainer
            key={resDataObj?.info?.id}
            resData={resDataObj}
          />
        ))}
      </div>
      <div className="filter">
        <div className="filter-btn"></div>
      </div>
    </div>
  );
};
export default Body;
