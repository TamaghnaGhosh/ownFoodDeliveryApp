import { CDN_URL } from "../utils/constants";
const ResrtrurantContainer = (props) => {
  const { name, cuisines, ...otherProps } = props?.resData?.info;

  return (
    <div className="res-card p-4 m-4 w-[235px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="res-logo rounded-lg w-full"
        alt="res-card"
        src={`${CDN_URL}${otherProps?.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4><span className="font-bold">Cuisines:</span> {cuisines.join(", ")}</h4>
      <h4 className="flex py-1 pl-9"><span className="font-bold">Rating: </span><span className="pl-1">{otherProps?.avgRatingString + " " + "star"}</span></h4>
      <h4 className="font-bold py-1 ">{otherProps?.costForTwo} star</h4>
      <h4><span className="font-bold">Delivery Time:</span> {otherProps.sla?.deliveryTime} mins</h4>
    </div>
  );
};
export const WithLabelTopRatedRestrurants = (ResrtrurantContainer) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-slate-600 text-white rounded-lg m-2 p-1">Popular Restaurant</label>
        <ResrtrurantContainer {...props} />
      </>
    );
  };
};
export default ResrtrurantContainer;
