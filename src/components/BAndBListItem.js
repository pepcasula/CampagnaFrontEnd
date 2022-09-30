import React from 'react';
import './BAndBListItem.css';

const BAndBListItem = ({bAndB, onBAndBClick}) => {



  const handleClick = function(){
    onBAndBClick(bAndB);
  }


  return <li onClick={handleClick}>{bAndB.name}</li>
}

export default BAndBListItem;