import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

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
        if (window.confirm("wrong resturant id " + resId)) {
            return <Shimmer />
        }
    }
    const { name, cuisines, costForTwoMessage } = (resturantMenu?.cards[0]?.card?.card?.info);
    
    const itemCards = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    console.log(itemCards);

    return (
        <div className='Menu'>
            <h2 style={{ marginLeft: "38px" }}>{name} </h2>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul className='ListName'>
                <h3>Menu</h3>
                {itemCards?.map((item) => <li key={item?.card?.info?.id} >
                    {item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </li>)}
            </ul>
        </div>

    )
}

export default RestrurantMenuPage