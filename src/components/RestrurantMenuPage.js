import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import Error from './Error';

const RestrurantMenuPage = () => {
    const [resturantMenu, setResturantMenu] = useState(null);

    const { resId } = useParams();

    useEffect(() => {

        fectMenuPage();
    
    }, [])

    const fectMenuPage = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const result = await data.json();
        setResturantMenu(result?.data)
    }

    if (resturantMenu === null) return <Shimmer />

    if (!resturantMenu.hasOwnProperty('cards')) {

        return <Error />

    }

    const { name, cuisines, costForTwoMessage } = (resturantMenu?.cards[0]?.card?.card?.info);

    console.log(resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const itemCards = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (
        <div className='Menu'>
            <h2 style={{ marginLeft: "38px" }}>{name} </h2>
            <p style={{ marginLeft: "38px" }}>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul className='ListName'>
                <h3>{resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h3>
                {itemCards?.map((item) => <li key={item?.card?.info?.id} >
                    {item?.card?.info?.name} - <b>{" Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</b>
                </li>)}
            </ul>
        </div>

    )
}

export default RestrurantMenuPage