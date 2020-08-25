import React from "react";
import "./Product.scss";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import { useStateValue } from "./Store";

function Product(props) {
  const { id, title, price, image, rating } = props;
  const {
    globalState: { basket },
    dispatch,
  } = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, price, image, rating },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarSharpIcon key={index} />
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
