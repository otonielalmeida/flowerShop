import { Fragment, useContext } from "react";
import classes from "./FlowerItem.module.css";
import FlowerItemForm from "./FlowerItemForm";
import CartContext from "../../../store/cart-context";

const FlowerItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Fragment>
      <li className={classes.flower}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.desc}>{props.description}</div>
        </div>
        <div className={classes.cartarea}>
          <FlowerItemForm onAddToCart={addToCartHandler} />
          <div className={classes.price}>${props.price}</div>
        </div>
      </li>
      <hr />
    </Fragment>
  );
};

export default FlowerItem;
