import React from "react";
import ReactDOM from "react-dom";

import WSSMyRequests from './components/my_requests';

(function () {

  var my_requests = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<WSSMyRequests urls={urls} src={urls.src}/>,
        document.getElementById('id_my_requests'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.my_requests) {
    window.my_requests = my_requests();
  }
}());
