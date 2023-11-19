import ResrtrurantContainer from "./ResrtrurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestrurants from "../utils/useFetchRestrurants";

const Body = () => {

  //check internet connectivity customs hook
  const onLineStatus = useOnlineStatus();

  const { filterRestrurantS, setFilterResturantS, fetchResturants, searchText, setSearchText } = useFetchRestrurants();

  //check internet connectivity customs hook/conditional Rendering
  if (onLineStatus === false) return <h1>Please check the internet connection in your system</h1>;

  //update the Restaurants by their rating
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
