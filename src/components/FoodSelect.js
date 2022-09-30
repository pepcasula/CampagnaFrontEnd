import React from 'react';

const FoodSelector = ({foods, onFoodSelected}) => {

    const handleChange = function(event) {
        const chosenFood = foods[event.target.value];
        onFoodSelected(chosenFood);
    }
    
    const foodOptions = foods.map((food, index) => {
        return <option value={index} key={index}>{food.name}</option>
    })

    return (
        <select onChange={handleChange}>
            <option value="" defaultValue>Choose a Product</option>
            {foodOptions}
        </select>
    )
}

export default FoodSelector;