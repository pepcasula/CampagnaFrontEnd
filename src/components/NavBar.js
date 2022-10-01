import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/products">Products</Link>
            </li>
            <li>
                <Link to ="/accomodations">Accomodations</Link>
            </li>
            <li>
                <Link to ="/events">Events</Link>
            </li>
        </ul>
    );
}



export default NavBar;