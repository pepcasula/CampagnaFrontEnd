import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: rgb(230, 242, 255);
  font-size: 1.25em;
  color: rgb(0, 49, 102);
  margin: 2em;
  padding: 0.8em;
  border-radius: 0.4em;
  border: 1px black;
  color: navy;
  text-decoration: none;
  `

const Details = styled.p`
color: rgb(0, 49, 102);
text-decoration: none;
`

const BAndBListItem = ({bAndB, onBAndBClick}) => {



  const handleClick = function(){
    onBAndBClick(bAndB);
  }


  return (

      <ListItem onClick={handleClick}>
        <div>
          <Link to="/accomodations/detail" style={{textDecoration: 'none', color: 'rgb(0, 49, 102)'}}><h4>{bAndB.name}</h4></Link>
          <Details>
            Email: {bAndB.email}<br/>
            Phone number: {/*{bAndB.phoneNumber}*/}
          </Details>
        </div>
        <div>
          <Link to="/accomodations/detail">
            <img height="220px" src="../../images/creepy2.webp"/>
            {/* <img src={bAndB.imgurl}/> */}
          </Link>
        </div>
      </ListItem>
  )
}

export default BAndBListItem;