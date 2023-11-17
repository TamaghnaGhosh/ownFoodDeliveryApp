import { CDN_URL } from "../utils/constants";
const ResrtrurantContainer = (props) => {
  const { name, cuisines, ...otherProps } = props?.resData?.info;


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

      <img
        className="res-logo"
        alt="res-card"
        src={`${CDN_URL}${otherProps?.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{otherProps?.avgRatingString} star</h4>
      <h4>{otherProps?.costForTwo} star</h4>
      <h4>{otherProps.sla?.deliveryTime} mins</h4>
    </div>
  );
};
export default ResrtrurantContainer;
