import React from 'react';
import PropTypes from 'prop-types';


const RequestDetails = props => {
  let detailsItems = props.details.map((el, index) => {
    return (
      <li key={index}>
        <div className="details-cell-key">{el.name}</div>
        <div className="details-cell-value">{el.value}</div>
      </li>
    );
  });
  return (

      <ul className="details-cell">
        {detailsItems}
      </ul>

  );
};


RequestDetails.propTypes = {

};

export default RequestDetails;
