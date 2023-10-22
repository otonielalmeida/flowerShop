import React from "react";

import classes from "./Header.module.css";
import flowerImage from "../../assets/tulips.JPG";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}>South Flower Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={flowerImage} alt="flower" />
      </div>
    </React.Fragment>
  );
};

export default Header;
