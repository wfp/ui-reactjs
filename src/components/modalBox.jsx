import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import WfpActionButton from './wfpActionButton';

const ModalBox = (props) => {
    const mainClass = classnames('modalbox');
    const bodyClass = classnames('modalbox--description');
    const footerClass = classnames('modalbox--footer');
    return (
        <div className={mainClass}>
            {
                props.description && (
                    <p className={bodyClass}>{props.description}</p>
                )
            }
            <div className={footerClass}>
                {props.children}

            </div>
        </div>
    );
};

ModalBox.propTypes = {
    actions: PropTypes.array,
    description: PropTypes.string,
    type: PropTypes.string
};

ModalBox.defaultProps = { };

export default ModalBox;
