import React from 'react';
import PropTypes from 'prop-types';


const RequestHistory = props => {
  let historyItems = props.history.map((el, index) => {
    return (
      <li key={index} className="wfp-grid">
        <div className="wfp-u-5-6">
          <span className="hist_date" >{el.date}</span>
          <span>{el.author}</span>
        </div>
        <div className="wfp-u-1-6 message-box">
          <a href="#"><i className="fa fa-fw fa-envelope"></i></a>
        </div>
      </li>
    );
  });
  return (
    <td>
      <ul>
        {historyItems}
      </ul>
    </td>
  );
};


RequestHistory.propTypes = {

};

export default RequestHistory;
