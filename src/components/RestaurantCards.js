import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    const {
        id,
        name,
        cuisines,
        locality,
        avgRating,
        sla: { deliveryTime },
        cloudinaryImageId
    } = props.resData.info;
    return (
        <div className="resto-container">
            <img src={CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <p>{cuisines.join(", ")} !</p>
            <p>{locality}</p>
            <p>{avgRating} Stars</p>
            <p>Delivered within {deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCards;