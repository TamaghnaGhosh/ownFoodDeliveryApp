import { useEffect, useState } from "react";
import ResrtrurantContainer from "./ResrtrurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filterRestrurantS, setFilterResturantS] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {

    fetchResturants();

  }, []);

  console.log(filterRestrurantS);
  const fetchResturants = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    setFilterResturantS(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false) return <h1>Please check the internet connection in your system</h1>;

  //Conditional Rendering
  // if (filterRestrurantS === undefined) {
  //   return <Shimmer />;
  // }

  const updatedResListByTheirRatings = (resList) => {
    const upadatedReslist = resList.filter((res) => res?.info?.avgRating > 4.3);
    setFilterResturantS(upadatedReslist);
  };

  return (filterRestrurantS?.length === 0 || filterRestrurantS === undefined) ? (
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
              const filterRestrurant = filterRestrurantS?.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterRestrurant);
              if (filterRestrurant?.length !== 0) {
                setFilterResturantS(filterRestrurant);
              } else {
                if (window.confirm(`The restaurant is not found in the list`)) {
                  setSearchText("");
                  fetchResturants();
                }
              }
              if (searchText === "") {
                fetchResturants();
              }
            }}
          >
            Search
          </button>
        </div>

        <button
          disabled={searchText === "" ? false : true}
          className="filter-btn"
          onClick={() => {
            updatedResListByTheirRatings(filterRestrurantS);
          }}
        >
          Top Rated Resrtrurant
        </button>
      </div>
      <div className="res-container">
        {filterRestrurantS?.map((resDataObj, i) => (
          <Link to={`/restrurants/${resDataObj?.info?.id}`} key={resDataObj?.info?.id} style={{ textDecoration: "none", color: "black" }}>
            <ResrtrurantContainer
              resData={resDataObj}
            />
          </Link>
        ))}
      </div>
      <div className="filter">
        <div className="filter-btn"></div>
      </div>
    </div>
  );
};
export default Body;
