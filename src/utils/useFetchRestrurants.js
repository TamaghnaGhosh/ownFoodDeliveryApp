import { useEffect, useState } from "react";

const useFetchRestrurants = () => {
  const [filterRestrurantS, setFilterResturantS] = useState([]);
  const [copyRestrurants, setCopyRestrurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchResturants();
  }, []);
  const fetchResturants = async () => {
    try {
      const data = await fetch(
        // `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        `https://corsproxy.plentygram.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      setFilterResturantS(
        json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setCopyRestrurants(
        json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      // console.log(json?.data?.cards);
    } catch (error) {
      debugger;
      console.log(error);
    }
  };
  return {
    filterRestrurantS,
    setFilterResturantS,
    fetchResturants,
    searchText,
    setSearchText,
    setCopyRestrurants,
    copyRestrurants,
  };
};

export default useFetchRestrurants;
