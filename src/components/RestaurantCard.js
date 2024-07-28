import { image } from "../utils/constant";

export const RestaurantCard = (props) => {
  return (
    <article className="food_card">
      <div className="card-img">
        <img src={props.image}></img>
      </div>
      <div className="card_info">
        <div className="even">
          <h4>{props.dishName}</h4>
          <span
            className="rating"
            style={{
              background: "green",
              padding: "0.1rem 0.3rem",
              color: "white",
              borderRadius: "0.5rem",
            }}
          >
            {props.rating}
          </span>
        </div>
        <div className="even">
          <small>Onion,Potato,Wheat Flour,Semiya</small>
          <small className="price">{props.price}</small>
        </div>
        <div className="even">
          <small>saibaba Colony Coimbatore</small>
          <span className="dist">1.9km</span>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
