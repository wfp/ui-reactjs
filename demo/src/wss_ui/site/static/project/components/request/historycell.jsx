import React from 'react';
import PropTypes from 'prop-types';


const RequestHistory = props => {
  let historyItems = props.history.map((el, index) => {
    return (
      <li key={index} className="wfp-grid">
        <div className="wfp-u-5-6">
          <span className="hist_date" >{el.timestamp}</span>
          <span>{el.user.first_name} {el.user.last_name}</span>
        </div>
        <div className="wfp-u-1-6 message-box">
          <a href="#"><i className="fa fa-fw fa-envelope"></i></a>
        </div>
      </li>
    );
  });
  return (

      <ul>
        {historyItems}
      </ul>

  );
};


RequestHistory.propTypes = {

};

export default RequestHistory;
