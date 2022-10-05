import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  color: white;
  /* color: rgb(0, 102, 34); */
  font-size: 1.6em;
  font-style: italic;
  text-shadow: 0.8px 0.8px rgb(0, 102, 34);
  position: absolute;
  top: 24%;
  right: 0%;
  width: 38%;
  background-color: rgba(0, 102, 34, .3);
  padding: 5px 0px 0px 9px;
  /* margin: .3em; */
  /* border-radius: 0.2em; */
`



const Home = () => {

  return (
    <>
      <div className='sub-routes'>
        <img width='100%' src="../../images/home01.png"/>
        <TextContainer>
            Campagna is a place where the people from a small rural community join together to promote their products and their territory.
            <p>If you are looking for outdoor activities, genuine organic produce, and a spiritual retreat surrounded by nature this is the scene for you.</p> 
        </TextContainer>
      </div>
      
    </>
  );

};

export default Home;