import React from 'react';
import PropTypes from 'prop-types';


const RequestDetails = props => {
  let detailsItems = props.details.map((el, index) => {
    return (
      <li>
        <div>{el.name}</div>
        <div>{el.value}</div>
      </li>
    );
  });
  return (
    <td>
      <ul>
        {detailsItems}
      </ul>
    </td>
  );
};


RequestDetails.propTypes = {

};

export default RequestDetails;
