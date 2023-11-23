const useFilterMenusByVegOnly = (resturantMenuAll) => {

    const array = resturantMenuAll?.map(card => card?.card?.card?.itemCards?.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"));
    return array;
}
export default useFilterMenusByVegOnly;
// (card?.card?.card?.itemCards?.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"))