import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <div type="badge" className={classes.badge}>
          0
        </div>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
