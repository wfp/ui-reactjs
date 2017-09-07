import React from 'react';
import PropTypes from 'prop-types';


const RequestAvailableActions = prpps => {
  return (
    <td>
      <div className="inline-actions">
        <span className="fill-data-list-item" data-fill-mode="list" data-content="actions">
          <span className="template">
            <button className="wfp-btn btn-small xsmall fill-data-list-item"
                    data-fill-attribute="className" data-content="mode"><span
              className=" fill-data-list-item" data-content="name"></span></button>
          </span>
        </span>
        <span className="fill-data-list-item" data-fill-mode="list" data-content="secondary_actions">
          <button className="wfp-btn xsmall other dropdown-trigger closed"><i
                  className="fa fa-fw fa-chevron-down"></i></button>
          <div className="dropdown">
            <ul className="menu--group">
              <div className="template">
                <li className="menu--item "><a className=""><span className="fill-data-list-item"
                                                                  data-content="name"></span></a></li>
              </div>
            </ul>
          </div>
        </span>
      </div>
    </td>
  );
};

RequestAvailableActions.propTypes = {

};

export default RequestAvailableActions;
