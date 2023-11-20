import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import Error from './Error';
import useResrurantMenu from '../utils/useResrurantMenu';
import useFilterMenusByVegOnly from '../utils/useFilterMenusByVegOnly';
import RestrurantMenuCard from './RestrurantMenuCard';

const RestrurantMenuPage = () => {
    const { resId } = useParams();

    const [resturantVegMenuToggleButton, setresturantVegMenuToggleButton] = useState(false);

    const { resturantMenu, resturantMenuAllCards } = useResrurantMenu(resId)

    if (resturantMenu === null) return <Shimmer />;

    if (!resturantMenu?.hasOwnProperty('cards')) {
        return <Error />
    }

    // filter Menus By Veg Only Hooks
    const filterMenusByVegOnly = useFilterMenusByVegOnly(resturantMenuAllCards);

    console.log('All menu cards in the array', resturantMenuAllCards);
    console.log('Veg menu only in array cards', filterMenusByVegOnly);

    const { name, cuisines, costForTwoMessage } = (resturantMenu?.cards[0]?.card?.card?.info);

    const allTheMenusOfIndexFive = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card?.itemCards;

    return (
        allTheMenusOfIndexFive !== undefined ? <>
            <div className='Menu'>
                <h2>{name} </h2>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <ul className='ListName'>
                    <h3>{resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card?.title}</h3>
                    <button className="px-4 py-1 bg-slate-400 m-4 rounded-lg text-white" onClick={() => setresturantVegMenuToggleButton(!resturantVegMenuToggleButton)}>
                        {resturantVegMenuToggleButton ? "ONLY VEG" : "NON VEG & VEG"}
                    </button>
                    {(resturantVegMenuToggleButton ? filterMenusByVegOnly[5] : allTheMenusOfIndexFive)?.map((item) =>
                        <RestrurantMenuCard item={item} key={item?.card?.info?.id} />
                    )}
                </ul>
            </div>
        </> : <Shimmer name="allTheMenusOfIndexFiveUndefined" />
    )
}

export default RestrurantMenuPage