import ResrtrurantContainer, { WithLabelTopRatedRestrurants } from "./ResrtrurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestrurants from "../utils/useFetchRestrurants";

const Body = () => {

  //check internet connectivity customs hook
  const onLineStatus = useOnlineStatus();

  const { filterRestrurantS, setFilterResturantS, fetchResturants, searchText, setSearchText } = useFetchRestrurants();

  // console.log(filterRestrurantS);

  const TopRatedHigherOrderComponents = WithLabelTopRatedRestrurants(ResrtrurantContainer);

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
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search Resturants"
            name="search"
            autoComplete="false"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="px-4 py-1 bg-slate-400 m-4 rounded-lg text-zinc-50"
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
        <div className="search p-4 m-4 flex item-center">
          <button
            disabled={searchText === "" ? false : true}
            className="px-4 py-1 bg-slate-400 m-4 text-zinc-50 rounded-lg disabled:bg-gray-300"
            onClick={() => {
              updatedResListByTheirRatings(filterRestrurantS);
            }}
          >
            Top Rated Resrtrurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-start p-1">
        {filterRestrurantS?.map((resDataObj, i) => (
          <Link to={`/restrurants/${resDataObj?.info?.id}`} key={resDataObj?.info?.id} style={{ textDecoration: "none", color: "black" }}>
            {resDataObj?.info?.avgRating > 4.3 ? (
              <TopRatedHigherOrderComponents resData={resDataObj} />
            ) : (
              <ResrtrurantContainer resData={resDataObj} />
            )}
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
