import React from 'react';
import CampagnaContainer from './containers/CampagnaContainer';
import styled from 'styled-components';

const HeaderLogo = styled.h1`
  font-family: "Gill Sans", "Futura", "Source Sans Pro",sans-serif;
  font-size: 80px;
  color: rgb(0, 102, 34);
  margin: 0px;
  padding: 0px;
`

function App() {

  return (
    <div className="App">
      <HeaderLogo>
      {/* Campagna */}
      <img src="/images/header4.png"></img>
      </HeaderLogo>
      
      <CampagnaContainer />
    </div>
  );
}

export default App;
