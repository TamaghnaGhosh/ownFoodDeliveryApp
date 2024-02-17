import { useEffect, useState } from "react";
import { CORS_API_KEY } from "./constants";

const useFetchRestrurants = () => {
  const [filterRestrurantS, setFilterResturantS] = useState([]);
  const [copyRestrurants, setCopyRestrurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
    return () => {};
  }, []);

  // const fetchResturants = async () => {
  //   try {
  //     const data = await fetch(
  //       `https://corsproxy.plentygram.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING` ||
  //         `https://corsproxy.plentygram.com/https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999`
  //     );
  //     const response = await fetch(
  //       data?.status === 200
  //         ? `https://corsproxy.plentygram.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  //         : `https://corsproxy.plentygram.com/https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999`
  //     );
  //     const json = await response.json();
  //     const filterRestrurantSearch = json?.data?.cards?.filter(
  //       (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     );
  //     const filterMobileRestrurantSearch = json?.data?.success?.cards?.filter(
  //       (c) => c?.gridWidget.gridElements.infoWithStyle.restaurants
  //     );
  //     const selectResData =
  //       filterMobileRestrurantSearch?.[0]?.gridWidget.gridElements.infoWithStyle
  //         .restaurants ||
  //       filterRestrurantSearch?.[0]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;
  //     setFilterResturantS(selectResData);
  //     setCopyRestrurants(selectResData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchRestaurants = async () => {
    try {
      let endpoint;
      const latitude = 12.9351929;
      const longitude = 77.62448069999999;
      if (window.innerWidth > 1300) {
        // desktop
        endpoint = `${CORS_API_KEY}${encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        )}`;
      } else if (window.innerWidth <= 1300 && window.innerWidth > 600) {
        // tablet
        endpoint = `${CORS_API_KEY}${encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        )}`;
      } else {
        // mobile
        endpoint = `${CORS_API_KEY}${encodeURIComponent(
          `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`
        )}`;
      }

      const response = await fetch(endpoint);
      const json = await response?.json();

      const selectResData = getSelectedData(json);

      setFilterResturantS(selectResData);
      setCopyRestrurants(selectResData);
    } catch (error) {
      console.error(error);
    }
  };

  const getSelectedData = (json) => {
    let selectedData = [];
    if (window.innerWidth > 1300) {
      const filterRestaurantSearch = json?.data?.cards?.filter(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      selectedData =
        filterRestaurantSearch?.[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
    } else if (window.innerWidth <= 1300 && window.innerWidth > 600) {
      const filterRestaurantSearch = json?.data?.cards?.filter(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      selectedData =
        filterRestaurantSearch?.[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
    } else {
      const filterMobileRestaurantSearch = json?.data?.success?.cards?.filter(
        (c) => c?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      );
      selectedData =
        filterMobileRestaurantSearch?.[0]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants || [];
    }
    return selectedData;
  };

  return {
    filterRestrurantS,
    setFilterResturantS,
    searchText,
    setSearchText,
    setCopyRestrurants,
    copyRestrurants,
  };
};

export default useFetchRestrurants;
