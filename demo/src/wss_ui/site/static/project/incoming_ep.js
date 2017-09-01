import React from "react";
import ReactDOM from "react-dom";

import WSSIncomingRequests from './components/incoming';

(function () {

  var incoming_requests = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<WSSIncomingRequests urls={urls} />,
        document.getElementById('incoming'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.pagecreate) {
    window.incoming_requests = incoming_requests();
  }
}());
