import React from 'react';
import FoodListItem from './FoodListItem';

const FoodList = ({foods, onFoodClick}) => {

    const foodsItems = foods.map((food, index) => {
      return <ListItem food={food} key={index} onFoodClick={onFoodClick} />
    })

  return (
    <div>
    <ul>
      {foodsItems}
    </ul>
  </div>
  )
}

export default FoodList;