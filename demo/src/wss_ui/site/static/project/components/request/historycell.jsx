import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';

const RequestHistory = props => {
  const { history } = props;
  let historyItems = history.slice(0, 5).map((el, index) => {
    return (
      <li
        className="wfp-grid history-cell--list-element"
        key={index}
      >
        <div className="wfp-u-5-6">
          <span className="hist_date wfp-u-6-6" >{dateformat(new Date(el.timestamp), 'dddd dd mmmm yyyy')}</span>
          <span className="wfp-u-6-6">{el.user.first_name} {el.user.last_name}</span>
        </div>
        <div className="wfp-u-1-6 message-box">
          <a href="#"><i className="fa fa-fw fa-envelope" /></a>
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
