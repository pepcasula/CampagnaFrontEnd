import React from 'react';
import './FoodListItem.css';
import styled from "styled-components";

const ListItem = styled.li`
  background-color: beige;
  font-size: 1em;
  margin: 2em;
  padding: 1em;
  border-radius: 1em;
  border: 1px black;
`

const FoodListItem = ({food, onFoodClick}) => {

  const handleClick = function(){
    onFoodClick(food);
  }

  return <ListItem onClick={handleClick}>
                                    <h4>{food.name}</h4>
                                    <p>{food.description}</p>
                                    Content per unit: {food.sizePerUnit}{}<br/>
                                    Price: {food.price}<br/>
                                    {food.farmer.name}
         </ListItem>
}

export default FoodListItem;