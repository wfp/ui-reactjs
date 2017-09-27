import React from 'react';
import PropTypes from 'prop-types';


const RequestStatus = props => {
  let children = [];

  for (let currentStep = 1; currentStep <= props.status.steps; currentStep++)
  {
    let dotClass = currentStep <= props.status.current ? "dot " + props.status.state : "dot";
    let edgeClass = currentStep < props.status.current ? "edge " + props.status.state : "edge";

    if (currentStep == props.status.current) {
      dotClass = dotClass + " action";
    }

    children.push(<div key={currentStep + dotClass} className={dotClass} />);
    if (currentStep < props.status.steps) {
      children.push(<div key={currentStep + edgeClass} className={edgeClass} />);
    }
  }

  return (

      <div className="status-widget">
        {children}
      </div>

  );
};


RequestStatus.propTypes = {

};

export default RequestStatus;
