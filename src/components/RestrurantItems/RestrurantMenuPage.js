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

    const [clonedArrayAddVegItemCard, setClonedArrayAddVegItemCard] = useState([]);

    const { resturantMenu, resturantMenuAllCards } = useResrurantMenu(resId);

    if (resturantMenu === null) return <Shimmer />;

    if (!resturantMenu?.hasOwnProperty('cards')) {
        return <Error />
    }

    const allTheCardItems = resturantMenuAllCards?.filter((item) => item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // filter Menus By Veg Only Hooks
    const filterMenusByVegOnly = useFilterMenusByVegOnly(allTheCardItems);

    function filterMenusByVegOnlyFunc(allTheCardItems, filterMenusByVegOnly) {
        const clonedArray = JSON.parse(JSON.stringify(allTheCardItems));

        clonedArray.forEach((addItemCards, j) => {
            delete addItemCards.card.card.itemCards;
            filterMenusByVegOnly.forEach((addItemCardsVeg, i) => {
                if (j == i) {
                    return addItemCards.card.card.itemCards = (addItemCardsVeg)
                }
            })
        })
        setClonedArrayAddVegItemCard(clonedArray);
    }

    // console.log(filterMenusByVegOnly);
    // console.log(clonedArrayAddVegItemCard);
    // console.log(allTheCardItems)

    const { name, cuisines, costForTwoMessage } = (resturantMenu?.cards[0]?.card?.card?.info);
    // const allTheMenusOfIndexOne = resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

    return (
        <div className='text-center'>
            <h2 className='font-bold text-2xl my-6'>{name} </h2>
            <p className=''>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <button className="px-4 py-1 bg-slate-400 m-4 rounded-lg text-white" onClick={() => { filterMenusByVegOnlyFunc(allTheCardItems, filterMenusByVegOnly), setresturantVegMenuToggleButton(!resturantVegMenuToggleButton) }}>
                {resturantVegMenuToggleButton ? "ONLY VEG" : "NON VEG & VEG"}
            </button>
            {/* *********All categories of card items shown by an accordion****** */}
            {(resturantVegMenuToggleButton ? clonedArrayAddVegItemCard : allTheCardItems)?.map((categories) => {
                return <RestrurantMenuCard item={categories?.card?.card} key={categories?.card?.card?.title} />
            })}

            {/* The previous way I was doing it my own way  */}

            {/* <ul className='ListName'> */}
                {/* <h3 className='font-semibold py-2'>{resturantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.title} -({!resturantVegMenuToggleButton ?
                    allTheMenusOfIndexOne?.length : filterMenusByVegOnly?.[0]?.length})</h3> */}

                {/* {(resturantVegMenuToggleButton ? filterMenusByVegOnly[6] : allTheMenusOfIndexOne)?.map((item) =>
                        <RestrurantMenuCard item={item} key={item?.card?.info?.id} />
                    )} */}
            {/* </ul> */}
        </div>
    )
}

export default RestrurantMenuPage