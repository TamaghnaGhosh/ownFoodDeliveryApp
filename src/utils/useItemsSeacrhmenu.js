
const useItemsSeacrhmenu = (allTheCardItems, clonedArrayAddVegItemCard, resturantVegMenuToggleButton, setFilterMenuItemCard) => {
    // const allTheCardItemsMenuSearch = (!resturantVegMenuToggleButton ? allTheCardItems : clonedArrayAddVegItemCard)?.map((item) => item?.card?.card?.itemCards.map((item) => item.card));

    const allTheCardItemsMenuSearch = allTheCardItems?.map((item) => item?.card?.card?.itemCards.map((item) => item.card));

    const cardVegMenuItemsSearch = clonedArrayAddVegItemCard?.map((item) => item?.card?.card?.itemCards.map((item) => item.card));

    const onKeyUpSearchField = (e) => {
        // if (e.target.value !== "") {
        //     const filterRestrurantMenu = allTheCardItemsMenuSearch?.flat(Infinity)?.filter((res) =>
        //         res?.info?.name?.toLowerCase().includes(e.target.value.toLowerCase().trim())
        //     );
        //     setFilterMenuItemCard(filterRestrurantMenu);
        // }
        if (e.target.value !== "" && !resturantVegMenuToggleButton) {
            const filterRestrurantMenu = allTheCardItemsMenuSearch?.flat(Infinity)?.filter((res) =>
                res?.info?.name?.toLowerCase().includes(e.target.value.toLowerCase().trim())
            );
            setFilterMenuItemCard(filterRestrurantMenu);
        }
        else {
            const filterRestrurantMenu = cardVegMenuItemsSearch?.flat(Infinity)?.filter((res) =>
                res?.info?.name?.toLowerCase().includes(e.target.value.toLowerCase().trim())
            );
            setFilterMenuItemCard(filterRestrurantMenu);
        }
    }
    return { onKeyUpSearchField }
}

export default useItemsSeacrhmenu;