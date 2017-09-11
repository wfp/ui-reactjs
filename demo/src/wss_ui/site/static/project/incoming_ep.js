import React from "react";
import ReactDOM from "react-dom";

import WSSIncomingRequests from './components/incoming';

(function () {

  var incoming_requests = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<WSSIncomingRequests urls={urls} src={urls.src}/>,
        document.getElementById('incoming'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.incoming_requests) {
    window.incoming_requests = incoming_requests();
  }
}());
