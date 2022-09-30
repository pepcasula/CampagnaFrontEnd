import React from 'react';

const BAndBSelector = ({bAndBs, onBAndBSelected}) => {

    const handleChange = function(event) {
        const chosenBAndB = bAndBs[event.target.value];
        onBAndBSelected(chosenBAndB);
    }
    
    const bAndBOptions = bAndBs.map((bAndB, index) => {
      return <option value={index} key={index}>{bAndB.name}</option>
    })

    return (
        <select onChange={handleChange}>
            <option value="" defaultValue>Choose a Product</option>
            {bAndBOptions}
        </select>
    )
}

export default BAndBSelector;