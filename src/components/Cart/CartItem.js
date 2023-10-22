import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onDelete}>x</button>
      </div>
    </li>
  );
};

export default CartItem;
