import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import { tooltipStyle } from '../utils/vars';

const MultipleActionsButton = (props) => {
        return (
            <Tooltip className="wfp-tooltip"
                { ...tooltipStyle }
                position="top-end"
                trigger="click"
                distance={20}
                interactive={true}
                followCursor= {false}
                html={(
                    <div>
                        <h4 className="tooltip__title">
                          {!props.title ? "Other Actions" : props.title}
                        </h4>
                        <p>A dialog box will appear with further details and a confirmation of your action.</p>
                        <ul className="multiaction__list">
                          <li>
                            {props.children}
                          </li>
                        </ul>
                    </div>
                )}>

                 <button className="multiaction__more wfp-btn dropdown-trigger">
                    <i className="fa fa-fw fa-ellipsis-v" />
                </button>
              </Tooltip>
               
        );
}

MultipleActionsButton.propTypes = {
    actions: PropTypes.array,
    title: PropTypes.string
};

MultipleActionsButton.defaultProps = {};

export default MultipleActionsButton;