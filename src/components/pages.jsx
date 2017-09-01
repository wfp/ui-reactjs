import React from 'react';
import PropTypes from 'prop-types';


const Pages = props => {
  return (
    <div className="wfp-pagination">
      <ol className="pagination--wrapper">
        <li className="pagination--item">
          <a href="#" className="pagination--btn">Previous</a>
        </li>
        <li className="pagination--item active">
          <span className="pagination--btn">1</span>
        </li>
        <li className="pagination--item">
          <a href="#" className="pagination--btn">2</a>
        </li>
        <li className="pagination--item">
          <a href="#" className="pagination--btn">3</a>
        </li>
        <li className="pagination--item ellipsis">
          <span className="pagination--btn ">&hellip;</span>
        </li>
        <li className="pagination--item">
          <a href="#" className="pagination--btn">Next</a>
        </li>
      </ol>
    </div>
  );
};

Pages.propTypes = {

};


export default Pages;
