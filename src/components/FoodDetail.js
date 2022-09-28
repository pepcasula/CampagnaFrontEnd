import React from 'react';
import CampagnaContainer from '../containers/CampagnaContainer';

const FoodDetail = ({selectedFood}) => {
  return (
      
      <div>
          <h3>{selectedFood.name}</h3>
          <p>{selectedFood.price}</p>
          <p>{selectedFood.foodType}</p>
          <p>{selectedFood.sizePerUnit}</p>
          <p>{selectedFood.description}</p>
          <p>{selectedFood.farmer.name}</p>
      </div>
  )
}

export default FoodDetail;