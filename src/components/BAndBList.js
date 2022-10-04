import React from 'react';
import styled from 'styled-components';
import BAndBListItem from './BAndBListItem';

const UList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const BAndBList = ({bAndBs, onBAndBClick}) => {

    const bAndBsItems = bAndBs.map((bAndB, index) => {
      return <BAndBListItem bAndB={bAndB} key={index} onBAndBClick={onBAndBClick}> {bAndB}</BAndBListItem>
    })

  return (
    <div className='sub-routes'>
    <img width="100%" src="/images/accomodationsbanner2.png"/>
    <UList>
      {bAndBsItems}
    </UList>
  </div>
  )
}

export default BAndBList;