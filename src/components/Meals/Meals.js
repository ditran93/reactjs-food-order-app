import { Fragment, useState } from "react";
import MealItem from "./MealItem";
import Card from "../UI/Card"
import MealsSummary from "./MealsSummary";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Card>
        {DUMMY_MEALS.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </Card>
    </Fragment>
  );
};

export default Meals;
