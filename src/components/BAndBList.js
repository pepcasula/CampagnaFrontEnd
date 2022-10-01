import React from 'react';
import BAndBListItem from './BAndBListItem';

const BAndBList = ({bAndBs, onBAndBClick}) => {

    const bAndBsItems = bAndBs.map((bAndB, index) => {
      return <BAndBListItem bAndB={bAndB} key={index} onBAndBClick={onBAndBClick}> {bAndB}</BAndBListItem>
    })

  return (
    <div className='sub-routes'>
    <ul>
      {bAndBsItems}
    </ul>
  </div>
  )
}

export default BAndBList;