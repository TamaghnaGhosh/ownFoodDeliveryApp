const useFilterMenusByVegOnly = (resturantMenuAll) => {

    return resturantMenuAll.map(card => (card?.card?.card?.itemCards?.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === "VEG")));

}
export default useFilterMenusByVegOnly;