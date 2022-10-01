import React from 'react';
import FoodListItem from './FoodListItem';

const FoodList = ({foods, onFoodClick, onBasketAdd, basket}) => {

    const foodsItems = foods.map((food, index) => {
      return <FoodListItem food={food} key={index} onFoodClick={onFoodClick} onBasketAdd={onBasketAdd} basket={basket}> {food}</FoodListItem>
      
    })

  return (
    <div className='sub-routes'>
    Our foods:
    <ul>
      {foodsItems}
    </ul>
  </div>
  )
}

export default FoodList;