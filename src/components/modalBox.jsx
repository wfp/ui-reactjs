import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash'

const ModalBox = (props) => {
    const mainClass = classnames('modalbox');
    const bodyClass = classnames('modalbox--description');
    const footerClass = classnames('modalbox--footer');
    const children = React.Children.toArray(props.children);
    const partition = lodash.groupBy(children, child => {
        if (child.props.hasOwnProperty('level')) {
            return child.props.level;
        }
        return 0;
    });
    let index = 0;
    const subfooters = lodash.map(partition, level => {
        return (
            <div key={"footer-" + (index++)} className={footerClass}>

                {level}

            </div>
        );
    });
    return (
        <div className={mainClass}>
            {
                props.description && (
                    <p className={bodyClass}>{props.description}</p>
                )
            }
            <div>
                {subfooters}
            </div>
        </div>
    );
};

ModalBox.propTypes = {
    description: PropTypes.string,
};

ModalBox.defaultProps = { };

export default ModalBox;
