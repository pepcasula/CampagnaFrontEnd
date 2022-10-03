import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BarItems = styled.ul`
    background-color: rgb(0, 102, 34);
    font-family: "Gill Sans", "Futura", "Source Sans Pro",sans-serif;
    font-size: 20px;
    color: white;
    margin: 0px;
    padding: 0px;
    border-bottom: solid 7px rgba(255,255,255,.3);
  `

const BarButton = styled.li`
    padding: 6px 0px 6px 0px;
    border-right: solid 1px rgba(255,255,255,.3);
`

const BarButtonLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 0px 20px 0px 10px;
  `

const NavBar = () => {

    return (

        <BarItems>
            <BarButton></BarButton>     {/* inactive button, used for styling left margin of second button */}
            <BarButton>
                <Link to="/" style={{textDecoration: 'none', color: 'white', padding: '0px 20px 0px 10px'}}>Home</Link>
            </BarButton>
            <BarButton>
                <Link to="/products" style={{textDecoration: 'none', color: 'white', padding: '0px 20px 0px 10px'}}>Products</Link>
            </BarButton>
            <BarButton>
                <Link to="/accomodations" style={{textDecoration: 'none', color: 'white', padding: '0px 20px 0px 10px'}}>Accomodations</Link>
            </BarButton>
            <BarButton>
                <Link to="/events" style={{textDecoration: 'none', color: 'white', padding: '0px 20px 0px 10px'}}>Events</Link>
            </BarButton>            
        </BarItems>
    );
}



export default NavBar;