import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';

const RequestHistory = props => {
  const { history } = props;
  let historyItems = history.slice(0, 5).map((el, index) => {
    return (
      <li
        className="history-cell--list-element"
        key={index}
      >
        <div className="history-cell-container">
          <div className="hist_date" >{dateformat(new Date(el.timestamp), 'dddd dd mmmm yyyy')}</div>
          <div>{el.user.first_name} {el.user.last_name}</div>
        </div>
        <div className="message-box">
          <a href="#"><span className="icon-email-closed-dark"></span></a>
        </div>
      </li>
    );
  });
  return (

    <ul className="wfp-u-1">
      {historyItems}
    </ul>

  );
};


RequestHistory.propTypes = {

};

export default RequestHistory;
