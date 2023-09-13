import { Fragment } from "react";
import classes from "./MealItemForm.module.css";
const MealItemForm = () => {
  return <Fragment>
    <div className={classes.form}>
      <label name="amount">Amount</label>
      <input name="amount" type="number"/>
      <button>+ Add</button>
    </div>
  </Fragment>;
};

export default MealItemForm;
