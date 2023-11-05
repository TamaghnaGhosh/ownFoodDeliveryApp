import { CDN_URL, CDN_URL_COPY } from "../utils/constants";
const ResrtrurantContainer = (props) => {
  // console.log(props?.resData);
  const { name, cuisines, ...otherProps } = props?.resData?.info;

  // console.log(otherProps);

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* {otherProps?.id === "000003" || otherProps?.id === "000004" ? (
        <img
          className="res-logo"
          alt="res-card"
          src={`${CDN_URL_COPY}${otherProps.imgCode}`}
        />
      ) : ( */}
      <img
        className="res-logo"
        alt="res-card"
        src={`${CDN_URL}${otherProps?.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{otherProps?.avgRatingString} star</h4>
      <h4>{otherProps.sla?.deliveryTime} mins</h4>
    </div>
  );
};
export default ResrtrurantContainer;
