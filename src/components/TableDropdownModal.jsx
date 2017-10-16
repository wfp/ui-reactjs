import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import WfpActionButton from './wfpActionButton';

const TableDropdownModal = (props) => {
  const messageBoxWrapperClass = classnames('table-messagebox');
  const messageBoxDescriptionClass = classnames('table-messagebox--description');
  const messageBoxFooterClass = classnames('table-messagebox--footer');
  return (
    <div className={messageBoxWrapperClass}>
      {!!props.description && (
        <p className={messageBoxDescriptionClass}>{props.description}</p>
      )}
      <div className={messageBoxFooterClass}>
        {props.actions.length > 0 && props.actions.map((action, index) => (
          <WfpActionButton
            action={action.label}
            key={index}
            type={props.type}
          />
        ))}
      </div>
    </div>
  );
};

TableDropdownModal.propTypes = {
  actions: PropTypes.array,
  description: PropTypes.string,
  type: PropTypes.string
};
TableDropdownModal.defaultProps = { };
export default TableDropdownModal;
