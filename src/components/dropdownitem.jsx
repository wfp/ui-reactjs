import React from 'react';
import PropTypes from 'prop-types';
const DropdownItem = (props) => {
    return (<li className="menu--item"><a href="props.url">{props.label}</a></li>);
};
DropdownItem.PropTypes = {
    url: PropTypes.string,
    label: PropTypes.string
};
export default DropdownItem;