import React from 'react';
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: rgb(255, 250, 230);
  font-size: 1.25em;
  color: rgb(0, 77, 26);
  margin: 2em;
  padding: 1em;
  border-radius: 0.4em;
  border: 1px black;
`

const FoodListItem = ({food, onFoodClick, onBasketAdd, basket}) => {

  const handleClick = function(){
    onFoodClick(food);
  }

  const addToBasket = () => {
    const newBasket = [...basket, food]
    onBasketAdd(newBasket)
  }

  return (
      <ListItem onClick={handleClick}>
            <div>
                  <h4>{food.name}</h4>
                  <p>{food.description}</p>
                  Content per unit: {food.sizePerUnit}{food.measurementUnit}<br/>
                  Price: £{food.price}.00<br/>
                  Farmer: {food.farmer.name}
                  <button onClick={addToBasket} value={food.name} className='buy-button'>Add to basket</button><br/>
            </div>
            <div>
                  <img width="230px" src={`/images/${food.imageUrl}`}/>
            </div>
      </ListItem>
  )
}

export default FoodListItem;