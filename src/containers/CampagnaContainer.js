import React, { useState, useEffect } from 'react';
import FoodList from '../components/FoodList';
import BAndBList from '../components/BAndBList';
import FoodDetail from '../components/FoodDetail';
import BAndBDetail from '../components/BAndBDetail';
import FoodSelector from '../components/FoodSelect';
import BAndBSelector from '../components/BAndBSelect';

import './CampagnaContainer.css';

const CampagnaContainer = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [bAndBs, setBAndBs] = useState([]);
    const [selectedBAndB, setSelectedBAndB] = useState(null);

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
    
    const onFoodClick = function(food) {
        setSelectedFood(food);
    }

    const onBAndBClick = function(bAndB) {
      setSelectedBAndB(bAndB);
  }

    const onFoodSelected = function(food){
      setSelectedFood(food);
  }

    const onBAndBSelected = function(bAndB){
      setSelectedBAndB(bAndB);
  }

    return (
        <div className="main-container">

            <FoodList foods={foods} onFoodClick={onFoodClick} />
            <FoodSelector foods={foods} onFoodSelected={onFoodSelected} />
            {selectedFood ? <FoodDetail selectedFood={selectedFood} /> : null}

            <BAndBList bAndBs={bAndBs} onBAndBClick={onBAndBClick} />
            <BAndBSelector bAndBs={bAndBs} onBAndBSelected={onBAndBSelected} />
            {selectedBAndB ? <BAndBDetail selectedBAndB={selectedBAndB}/> : null}

        </div>
    )
}

export default CampagnaContainer;