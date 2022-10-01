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
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Product</option>
            {bAndBOptions}
        </select>
    )
}

export default BAndBSelector;