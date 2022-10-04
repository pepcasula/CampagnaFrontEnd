import React from "react";
import styled from 'styled-components';

const UList = styled.ul`
display: flex;
flex-direction: row;
width: 70%;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgb(204, 255, 204);
  font-size: 1.25em;
  color: rgb(0, 77, 26);
  margin-bottom: 0px;
  margin: 2em 2em 0em 2em;
  padding: 1em;
  border-radius: 0.4em;
  border: 1px black;
`

const Trips = ({trips}) => {


    const unpackTrips = trips.map((trip, index) => {
        return <ListItem trip={trip} key={index}><h4>{trip.location}</h4><p>{trip.description}</p></ListItem>
    })

    return (<>
    <img width="100%" src="/images/tripsbanner.png"/>
    <UList>
        {unpackTrips}
    </UList>
    
    </>)

}

export default Trips