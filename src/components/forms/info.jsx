import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-tippy';
import { tooltipStyle } from '../../utils/vars';

const Info = ({children}) => {
	if (children)
		return (
			<Tooltip className="wfp-tooltip"
	            { ...tooltipStyle }
	            position="top-middle"
	            distance={10}
	            interactive={true}
	            followCursor= {false}
	            html={(
	                    <div>
	                       {children}
	                    </div>
	                )}>
	            	<div className="info__trigger"></div>
            </Tooltip>
		)
	else return (null)
}

Info.propTypes = {
	children: PropTypes.node,
};

export default Info