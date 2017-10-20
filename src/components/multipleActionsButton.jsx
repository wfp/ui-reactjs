import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import ModalBox from './modalBox';

export default class MultipleActionsButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listIsVisible: false
        };
        this.toggleListVisibility = this.toggleListVisibility.bind(this);
    }

    toggleListVisibility() {
        this.setState(prevState => ({
            listIsVisible: !prevState.listIsVisible
        }));
    }

    render() {
        const triggerIconClass = classnames('fa fa-fw', {
            'fa-chevron-up': this.state.listIsVisible,
            'fa-chevron-down': !this.state.listIsVisible
        });
        return (
            <span>
                <button
                    className="wfp-btn xsmall dropdown-trigger"
                    onClick={this.toggleListVisibility}>
                    <i className={triggerIconClass} />
                </button>
                <div className="dropdown fill-data-list-item" style={{
                    display: this.state.listIsVisible
                           ? "block"
                           : "none"
                }}>
                    {!!this.props.title && (
                         <div className="dropdown--label">{this.props.title}</div>
                     )}
                    {/*<ul className="menu--group">
                        <li className="menu--item" key={index}>
                        {this.props.children}
                        </li>
                        </ul> */}
                    <ModalBox description="Secondary Actions Buttons">
                        {this.props.children}
                    </ModalBox>
                </div>
            </span>
        );

    }
}

MultipleActionsButton.propTypes = {
    actions: PropTypes.array,
    title: PropTypes.string
};

MultipleActionsButton.defaultProps = {};
