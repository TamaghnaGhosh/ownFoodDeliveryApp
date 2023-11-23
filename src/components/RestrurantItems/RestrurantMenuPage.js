import React, { useState } from 'react'
import Shimmer from '../Shimmer';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import useResrurantMenu from '../../utils/useResrurantMenu';
import useFilterMenusByVegOnly from '../../utils/useFilterMenusByVegOnly';
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

    const allTheMenusOfIndexSix = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[6]?.card?.card?.itemCards;

    const allTheCardItems = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(allTheCardItems);

    return (
        <div className='text-center'>
            <h2 className='font-bold text-2xl my-6'>{name} </h2>
            <p className=''>{cuisines.join(", ")} - {costForTwoMessage}</p>

            {/* *********All categories of card items shown by an accordion****** */}
            {allTheCardItems?.map((categories) => {
                return <RestrurantMenuCard item={categories?.card?.card} key={categories?.card?.card?.title} />
            })}


            {/* The previous way I was doing it my own way  */}
            <ul className='ListName'>
                <h3 className='font-semibold py-2'>{resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[6]?.card?.card?.title} -({!resturantVegMenuToggleButton ?
                    allTheMenusOfIndexSix?.length : filterMenusByVegOnly?.[6]?.length})</h3>
                <button className="px-4 py-1 bg-slate-400 m-4 rounded-lg text-white" onClick={() => setresturantVegMenuToggleButton(!resturantVegMenuToggleButton)}>
                    {resturantVegMenuToggleButton ? "ONLY VEG" : "NON VEG & VEG"}
                </button>
                {/* {(resturantVegMenuToggleButton ? filterMenusByVegOnly[6] : allTheMenusOfIndexSix)?.map((item) =>
                        <RestrurantMenuCard item={item} key={item?.card?.info?.id} />
                    )} */}
            </ul>
        </div>
    )
}

export default RestrurantMenuPage