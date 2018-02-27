import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import UniversalModal from '../universalmodal/modal';
import UniversalModalTitle from '../universalmodal/modaltitle';
import UniversalModalContent from '../universalmodal/modalcontent';
import UniversalModalFooter from '../universalmodal/modalfooter';
import WfpActionButton from '../wfpActionButton';

import Blockquote from '../blockquote';


const Summary = ({ data, columnCount, type }) => {

	const divStyle = {
	  columnCount: columnCount ? columnCount : 2
	};

	return (
		<Blockquote className="summary" style={divStyle} type={type}>
			{data && Array.isArray(data) && (
                <ul>
                    { data.map((el, i) => <li key={i}><b className="summary__label">{el.label}</b><span className="summary__value">{el.value}</span></li>) }
                </ul>
            )}
		</Blockquote>
    );
};

Summary.propTypes = {
	/** Data Array containing objects {label: 'Label', value:'value'} */
	data: PropTypes.array,
	/** Number of columns show */
	columnCount: PropTypes.number,
};

export default Summary;
