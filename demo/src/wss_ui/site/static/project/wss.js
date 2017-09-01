import React from "react";
import ReactDOM from "react-dom";

import WSSHeader from "./components/header";


(function () {

  var wss = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<WSSHeader urls={urls} />,
        document.getElementById('header'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.wss) {
    window.wss = wss();
  }
}());



