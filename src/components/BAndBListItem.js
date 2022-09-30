import React from 'react';
import './BAndBListItem.css';
import styled from "styled-components";

const ListItem = styled.li`
  background-color: paleturquoise;
  font-size: 1em;
  margin: 2em;
  padding: 1em;
  border-radius: 1em;
  border: 1px black;
  `

const BAndBListItem = ({bAndB, onBAndBClick}) => {

  const handleClick = function(){
    onBAndBClick(bAndB);
  }


  return <ListItem onClick={handleClick}>
                                <h4>{bAndB.name}</h4>
                                Email: {bAndB.email}<br/>
                                Phone number: {bAndB.phoneNumber}
         </ListItem>
}

export default BAndBListItem;