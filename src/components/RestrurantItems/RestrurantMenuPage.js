import React, { useState, useEffect } from 'react'
import Shimmer from '../Shimmer';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import useResrurantMenu from '../../utils/useFetchResrurantMenu';
import { useFilterMenusByVegOnly } from '../../utils/useFilterMenusByVegOnly';
import RestrurantMenuCategoryCard from './RestrurantMenuCategoryCard';
import ItemMenuOfcards from './ItemMenuOfcards';
import useItemsSeacrhmenu from '../../utils/useItemsSeacrhmenu';

const RestrurantMenuPage = () => {


    const { resId } = useParams();

    const [activeIndex, setActiveIndex] = useState(0);

    const [resturantVegMenuToggleButton, setresturantVegMenuToggleButton] = useState(false);

    const [clonedArrayAddVegItemCard, setClonedArrayAddVegItemCard] = useState([]);

    const { resturantMenu, resturantMenuAllCards } = useResrurantMenu(resId);

    const [filterMenuItemCard, setFilterMenuItemCard] = useState([]);

    const [searchMenuText, setSearchMenuText] = useState("");

    if (resturantMenu === null) return <Shimmer />;

    if (!resturantMenu?.hasOwnProperty('cards')) {
        return <Error />
    }

    const allTheCardItems = resturantMenuAllCards?.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // filter Menus By Veg Only Hooks
    const filterMenusByVegOnly = useFilterMenusByVegOnly(allTheCardItems);

    const filterMenusByVegOnlyFunc = (allTheCardItems, filterMenusByVegOnly) => {
        const clonedArray = JSON.parse(JSON.stringify(allTheCardItems));
        //Es6 feature
        // const clonedArray = structuredClone(allTheCardItems);
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

    //active card of accordion
    const onItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    //Searching for items from the items menu list
    const { onKeyUpSearchField } = useItemsSeacrhmenu(allTheCardItems, clonedArrayAddVegItemCard, resturantVegMenuToggleButton, setFilterMenuItemCard);

    const { name, cuisines, costForTwoMessage } = (resturantMenu?.cards[0]?.card?.card?.info);

    return (
        <div className='text-center'>
            <h2 className='font-bold text-2xl my-4'>{name} </h2>
            <p className=''>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <label className="relative inline-flex items-center me-5 cursor-pointer mt-2">
                <input type="checkbox" value="" className="sr-only peer" onChange={() => {
                    filterMenusByVegOnlyFunc(allTheCardItems, filterMenusByVegOnly),
                        setresturantVegMenuToggleButton(!resturantVegMenuToggleButton)
                }} checked={resturantVegMenuToggleButton} disabled={searchMenuText !== "" ? true : false} />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {"ONLY VEG" + ' ' + '🥕'}
                    {/* {resturantVegMenuToggleButton ? "NON VEG & VEG" + ' ' + '🥩' : "ONLY VEG" + ' ' + '🥕'} */}
                </span>
            </label>
            <br />
            <input
                type="text"
                className="border border-solid border-slate-400 rounded-lg p-2 m-0 w-[400px] mt-1"
                placeholder="This search filter menu logic is a work in progress...."
                name="search"
                autoComplete="false"
                onKeyUp={onKeyUpSearchField}
                onChange={(e) => setSearchMenuText(e.target.value)}
                value={searchMenuText.trim()}
            />
            {(filterMenuItemCard?.length !== 0 && searchMenuText !== "") ? <ItemMenuOfcards items={filterMenuItemCard} filterMenuItemSearchCardProps={'filterMenuItemSearchCardProps'} />
                : (resturantVegMenuToggleButton ? clonedArrayAddVegItemCard : allTheCardItems)?.map((categories, index) =>
                (
                    <RestrurantMenuCategoryCard item={categories?.card?.card}
                        key={categories?.card?.card?.title}
                        onItemClick={() => onItemClick(index)}
                        activeIndex={activeIndex}
                        index={index} />
                ))}
        </div>
    )
}

export default RestrurantMenuPage