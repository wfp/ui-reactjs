import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-tippy';
import { tooltipStyle } from '../../utils/vars';

const Info = ({children, className, type}) => {

	const infoClasses = classNames({
		'wfp-btn': type === "large",
		'info__large-trigger': type === "large",
		'info__trigger': type !== "large",
		[`${className}`]: className,
	}); 

	if (children)
		if (type === "large") {
			return (
			<Tooltip className={"wfp-tooltip"}
	            { ...tooltipStyle }
	            position="bottom-right"
	            distance={10}
	            interactive={true}
	            followCursor= {false}
	            trigger="click"
	            html={(
	                    <div>
	                       {children}
	                    </div>
	                )}>
	            	<div className={infoClasses}>Info</div>
            </Tooltip>
			)
		}
		else {
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
	            	<div className={infoClasses}></div>
            </Tooltip>
			)
        }
	else return (null)
}

Info.propTypes = {
	children: PropTypes.node,
};

export default Info