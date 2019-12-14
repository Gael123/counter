import React from 'react';
import Food from './food';

const FoodList = (props) => {
  return (
    <div className="food-list">
      {props.food.map(food => <Food id = {food.id} key={food.id} selectFood={props.selectFood} />)}
    </div>
  );
};
export default FoodList;
