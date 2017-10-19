import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import WfpActionButton from './wfpActionButton';

const wfpModalBox = (props) => {
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
                {
                    props.actions.length > 0 && props.actions.map((action, index) => (
                        <WfpActionButton
                            action={action.label}
                            key={index}
                            type={props.type}
                        />
                    ))
                }
            </div>
        </div>
    );
};

wfpModalBox.propTypes = {
    actions: PropTypes.array,
    description: PropTypes.string,
    type: PropTypes.string
};

wfpModalBox.defaultProps = { };

export default wfpModalBox;
