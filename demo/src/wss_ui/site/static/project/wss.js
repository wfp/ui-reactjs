import React from "react";
import ReactDOM from "react-dom";

import WSSHeader from "./header";


(function () {

  var wss = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<WSSHeader urls={urls} />, document.getElementById('app'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.selfservice) {
    window.wss = wss();
  }
}());



