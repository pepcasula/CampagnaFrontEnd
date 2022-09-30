import React from 'react';
import CampagnaContainer from '../containers/CampagnaContainer';

const BAndBDetail = ({selectedBAndB}) => {
  return (
      
      <div>
          <h3>{selectedBAndB.name}</h3>
          <p>{selectedBAndB.email}</p>
          <p>{selectedBAndB.phoneNumber}</p>
          <p>I dare you to book....</p>
      </div>
  )
}

export default BAndBDetail;