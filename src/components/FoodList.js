import React from 'react';
import styled from "styled-components";
import FoodListItem from './FoodListItem';

const UList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const FoodList = ({foods, onFoodClick, onBasketAdd, basket}) => {

    const foodsItems = foods.map((food, index) => {
      return <FoodListItem food={food} key={index} onFoodClick={onFoodClick} onBasketAdd={onBasketAdd} basket={basket}> {food}</FoodListItem>
      
    })

  return (
    <div className='sub-routes'>
    <br/>FOODS BANNER HERE
    <UList>
      {foodsItems}
    </UList>
  </div>
  )
}

export default FoodList;