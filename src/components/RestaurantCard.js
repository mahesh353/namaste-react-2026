import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (prop) => {
const {resData} = prop;

  return (
    <div className="res-card">
      <img
        className="dishPic"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4>Rating: {resData.card.card.info.avgRating}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;