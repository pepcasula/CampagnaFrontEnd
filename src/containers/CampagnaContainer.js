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

import './CampagnaContainer.css';
import styled from "styled-components";



const CampagnaContainer = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [bAndBs, setBAndBs] = useState([]);
    const [selectedBAndB, setSelectedBAndB] = useState(null);
    const [basket, setBasket] = useState([])

    useEffect(() => {
      getFoods();
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
          <p>{showBasket}</p>
          <Router>
            <NavBar />
              {basket.length ? <p className='basket'>your basket has : {basket.length}<br></br> items and total price is £{basketTotalPrice}</p> : null}
              <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/products" element={< FoodList foods={foods} onFoodClick={onFoodClick} onBasketAdd={onBasketAdd} basket={basket}/>} />
                <Route path="/accomodations" element={< BAndBList bAndBs={bAndBs} onBAndBClick={onBAndBClick} />} />
                <Route path="/accomodations/detail" element={< BAndBDetail selectedBAndB={selectedBAndB} />} />
              </Routes>
              <Events />
          </Router>
        </div>
    )
}



export default CampagnaContainer;