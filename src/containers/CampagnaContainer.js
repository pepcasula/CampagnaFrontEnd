import React, { useState, useEffect } from 'react';
import FoodList from '../components/FoodList';
import FoodDetail from '../components/FoodDetail';
import FoodSelector from '../components/FoodSelect';
import './CampagnaContainer.css';

const CampagnaContainer = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFoods] = useState(null);
    // const [accomodations, setAccomodations] = useState([]);
    // const [selecteAccomodations, setSelectedAccomodations] = useState(null);

    useEffect(() => {
      getFoods();
    }, [])

    // useEffect(() => {
    //   getAccomodations();
    // }, [])

    const getFoods = function(){
        fetch('http://localhost:8080/foods')
        .then(res => res.json())
        .then(munros => setFoods(foods))
    }

  //   const getAccomodations = function(){
  //     fetch('http://')
  //     .then(res => res.json())
  //     .then(accomodations => setAccomodations(accomodations))
  // }


    return (
        <div className="main-container">
            <FoodList foods={foods} />
            {/* <AccomodationList accomodations={accomodations} /> */}
        </div>
    )
}

export default CampagnaContainer;