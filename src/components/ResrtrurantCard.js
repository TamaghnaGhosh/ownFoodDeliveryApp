import { CDN_URL, CDN_URL_COPY } from "../utils/constants";
const ResrtrurantContainer = (props) => {
  const { name, cuisine, rating, ...otherProps } = props?.resData;

  console.log(otherProps);

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {otherProps?.id === "000003" || otherProps?.id === "000004" ? (
        <img
          className="res-logo"
          alt="res-card"
          src={`${CDN_URL_COPY}${otherProps.imgCode}`}
        />
      ) : (
        <img
          className="res-logo"
          alt="res-card"
          src={`${CDN_URL}${otherProps.imgCode}`}
        />
      )}
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} star</h4>
      <h4>{otherProps.duration} mins</h4>
    </div>
  );
};
export default ResrtrurantContainer;
