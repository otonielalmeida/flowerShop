import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curnumber, item) => {
    return curnumber + item.amount;
  }, 0);
  const btnClasses = `${classes.btn} ${
    btnIsHighLighted ? classes.bump : ""
  }`
  const {items} = cartCtx

  useEffect(() =>{
    if (cartCtx.items.length ===0 ){
      return
    } 
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.num}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
