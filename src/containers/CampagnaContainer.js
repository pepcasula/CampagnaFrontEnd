import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import FoodList from '../components/FoodList';
import BAndBList from '../components/BAndBList';
import Events from '../components/Events';
import FoodDetail from '../components/FoodDetail';
import BAndBDetail from '../components/BAndBDetail';
import FoodSelector from '../components/FoodSelect';
import BAndBSelector from '../components/BAndBSelect';
import Trips from '../components/Trips';

import './CampagnaContainer.css';
import styled from "styled-components";



const CampagnaContainer = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [bAndBs, setBAndBs] = useState([]);
    const [selectedBAndB, setSelectedBAndB] = useState(null);
    const [basket, setBasket] = useState([])
    const [events, setEvents] = useState([])
    const [trips, setTrips] = useState([])

    useEffect(() => {
      getFoods();
      getEvents();
      getTrips();
    }, [])

    useEffect(() => {
      getBAndBs();
    }, [])

    const getFoods = function(){
        fetch('http://localhost:8080/foods')
        .then(res => res.json())
        .then(foods => setFoods(foods))
    }

    const getBAndBs = function(){
      fetch('http://localhost:8080/bandbs')
      .then(res => res.json())
      .then(bAndBs => setBAndBs(bAndBs))
    }

    const getEvents = function(){
      fetch('http://localhost:8080/events')
      .then(res => res.json())
      .then(events => setEvents(events))
    }

    const getTrips = function(){
      fetch('http://localhost:8080/trips')
      .then(res => res.json())
      .then(trips => setTrips(trips))
    }

    const onBasketAdd = function(newList){
      setBasket(newList)
    }
    
    const onFoodClick = function(food) {
        setSelectedFood(food);
    }

    const onBAndBClick = function(bAndB) {
      setSelectedBAndB(bAndB);
  }

  const showBasket = basket.map((element, index) => {
    
  })

  const basketTotalPrice = basket.reduce(
    (now, next) => now + next.price, 0
  )


    return (
        <div className="main-container">
          {showBasket}
          <Router>
            {/* <Header /> */}
            <NavBar />
              {basket.length ? <p className='basket'>your basket has : {basket.length}<br></br> items and total price is £{basketTotalPrice} <button to='/basket'>Go to Chekcout</button></p> : null}
              <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/products" element={< FoodList foods={foods} onFoodClick={onFoodClick} onBasketAdd={onBasketAdd} basket={basket}/>} />
                <Route path="/accomodations" element={< BAndBList bAndBs={bAndBs} onBAndBClick={onBAndBClick} />} />
                <Route path="/accomodations/detail" element={< BAndBDetail selectedBAndB={selectedBAndB} />} />
                <Route path="/trips" element={<Trips trips={trips}/>} />
                <Route path="/basket" basket={basket}/>
              </Routes>
              <Events events={events}/>
          </Router>
        </div>
    )
}



export default CampagnaContainer;