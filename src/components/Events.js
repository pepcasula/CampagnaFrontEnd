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

  background-color: pink; 
  width: 300px;
  height: 260px;
  font-size: 1.25em;
  color: rgb(0, 77, 26);
  margin: 2em;
  padding: 1em;
  border-radius: 0.4em;
  border: 1px black;
`

const Events = ({events}) => {


  const unpackEvents = events.map((event, index) => {
    return <ListItem event={event} key={index}><h4>{event.eventName}</h4><p>{event.eventDescription}<br></br>From {event.startDate} to {event.endDate}</p></ListItem>
  })


  return (
  <>
  <div className='sub-routes' id="events">
  <img width="100%" src="/images/eventsbanner3.png"/>
    <UList>
      {unpackEvents}
    </UList>
  </div>
  </>)
}

export default Events;