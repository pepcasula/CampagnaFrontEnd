import React from 'react';
import './FoodListItem.css';

const FoodListItem = ({food, onFoodClick}) => {

  const handleClick = function(){
    onFoodClick(food);
  }


  return <li onClick={handleClick}>{food.name}</li>
}

export default FoodListItem;