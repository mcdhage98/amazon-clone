import React from "react";
import "./Product.scss";
import StarSharpIcon from "@material-ui/icons/StarSharp";


function Product(props) {


  const addToBasket = () => {
    // dispatch({
    //   type:"ADD_TO_BASKET",
    //   item:{
    //     id,
    //     title,
    //     image,
    //     price,
    //     rating
    //   }
    // })
  };

  const { id, title, price, image, rating } = props;
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
            .map((_,index) => (
              <StarSharpIcon key={index}/>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
