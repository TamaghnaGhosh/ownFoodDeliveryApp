import { useEffect, useState } from 'react'

const useFetchRestrurants = () => {
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

    return { filterRestrurantS, setFilterResturantS, fetchResturants, searchText, setSearchText };
}



export default useFetchRestrurants;