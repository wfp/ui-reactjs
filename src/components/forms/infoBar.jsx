import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-tippy';
import { tooltipStyle } from '../../utils/vars';


class InfoBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    handleChange = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render () {

        const {children, content, className, type} =  this.props;

    	const infoClasses = classNames({
    		'infobar': true,
            expanded: this.state.expanded,
    		[`${className}`]: className,
    	}); 

    	if (children)
    	return (
            <div className={infoClasses}>
                <button className="infobar__button wfp-btn" onClick={this.handleChange} >{this.state.expanded ? "Hide Info" : "Show Info"}</button>
                <div className="infobar__content">
                    <div className="infobar__main">{children}</div>
                	<div className="infobar__bar">
                        <div className="infobar__bar__inner">{content}</div>
                    </div>
                </div>
            </div>
    	)
    	else return (null)
    }
}

InfoBar.propTypes = {
	children: PropTypes.node,
};

export default InfoBar
