import React from 'react';
import CampagnaContainer from '../containers/CampagnaContainer';

const BAndBDetail = ({selectedBAndB}) => {
  return (
      
      <div>
          <h3>{selectedBAndB.name}</h3>
          <p>{selectedBAndB.email}</p>
      </div>
  )
}

export default BAndBDetail;