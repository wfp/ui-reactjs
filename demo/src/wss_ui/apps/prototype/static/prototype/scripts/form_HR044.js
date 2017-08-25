"use strict";

/* Checkbox */

$(document).on("click", "#cb-change-requestor", function (e) {
    var $parent = $(".wfp-form--behalf");
    $parent.toggleClass("close");
});