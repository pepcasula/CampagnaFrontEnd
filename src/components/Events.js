import React from "react";
import styled from 'styled-components';

const UList = styled.ul`
display: flex;
flex-direction: column;
width: 70%;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: pink;
  font-size: 1.25em;
  color: rgb(0, 77, 26);
  margin: 2em;
  padding: 1em;
  border-radius: 0.4em;
  border: 1px black;
`

const Events = ({events}) => {


  const unpackEvents = events.map((event, index) => {
    return <ListItem event={event} key={index}>{event.eventName}<br></br>{event.eventDescription}<br></br>From {event.startDate} to {event.endDate}</ListItem>
  })

  console.log(events);


  return (
  <>
  <div className='sub-routes'>
    <h4>Events</h4>
    <UList>
      {unpackEvents}
    </UList>
  </div>
  </>)
}

export default Events;