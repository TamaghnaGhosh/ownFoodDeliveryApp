import { CDN_URL, CDN_URL_COPY } from "../utils/constants";
const ResrtrurantContainer = (props) => {
  console.log(props?.resData);
  const { name, cuisine, rating, ...otherProps } = props?.resData;

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
        src={`${CDN_URL}${
          otherProps.imgCode || props?.resData?.info?.cloudinaryImageId
        }`}
      />
      <h3>{name || props?.resData?.info?.name}</h3>
      <h4>{rating || props?.resData?.info?.cuisines.join(", ")}</h4>
      <h4>{rating || props?.resData?.info?.avgRatingString} star</h4>
      <h4>
        {otherProps.duration || props?.resData?.info?.sla?.deliveryTime} mins
      </h4>
    </div>
  );
};
export default ResrtrurantContainer;
