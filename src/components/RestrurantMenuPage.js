import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API, MENU_API_CDN_IMG } from '../utils/constants';
import Error from './Error';

const RestrurantMenuPage = () => {
    const [resturantMenu, setResturantMenu] = useState(null);
    const [resturantMenuAllCards, setResturantMenuAllCards] = useState(null);
    const [resturantVegMenuToggleButton, setresturantVegMenuToggleButton] = useState(false);
    const { resId } = useParams();

    useEffect(() => {
        fectMenuPage();
    }, [])

    const fectMenuPage = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const result = await data.json();
        setResturantMenu(result?.data);
        setResturantMenuAllCards(result?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    if (resturantMenu === null) return <Shimmer />
    if (!resturantMenu.hasOwnProperty('cards')) {
        return <Error />
    }


    // filter Menus By Veg Only
    const filterMenusByVegOnly = resturantMenuAllCards.map(card => (card?.card?.card?.itemCards?.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === "VEG")));

    console.log('All menu cards in the array', resturantMenuAllCards);
    console.log('Veg menu only in array cards', filterMenusByVegOnly);

    const { name, cuisines, costForTwoMessage } = (resturantMenu?.cards[0]?.card?.card?.info);
    const allTheMenusOfIndexFive = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card?.itemCards;

    const filterMenusByVegOnlyFunction = () => {
        setresturantVegMenuToggleButton(!resturantVegMenuToggleButton)
    }
    
    return (
        <div className='Menu'>
            <h2 style={{ marginLeft: "38px" }}>{name} </h2>
            <p style={{ marginLeft: "38px" }}>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul className='ListName'>
                <h3>{resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card?.title}</h3>
                <button onClick={() => filterMenusByVegOnlyFunction()}>{resturantVegMenuToggleButton ? "ONLY VEG" : "NON VEG & VEG"}</button>
                {(resturantVegMenuToggleButton ? filterMenusByVegOnly[5] : allTheMenusOfIndexFive)?.map((item) => <li key={item?.card?.info?.id} className='li_items'>
                    {item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    {item?.card?.info?.imageId ? <img
                        className="items-logo"
                        alt="res-card" width={256}
                        src={`${MENU_API_CDN_IMG}${item?.card?.info?.imageId}`}
                    /> : <div><h3 style={{ marginRight: "65px" }}> No Image</h3></div>}
                </li>)}
            </ul>
        </div>

    )
}

export default RestrurantMenuPage