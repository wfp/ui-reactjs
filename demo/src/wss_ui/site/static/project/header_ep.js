import React from "react";
import ReactDOM from "react-dom";

import WSSHeader from "./components/header";


(function () {

  var header = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<WSSHeader urls={urls} />,
        document.getElementById('id_header'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.header) {
    window.header = header();
  }
}());



