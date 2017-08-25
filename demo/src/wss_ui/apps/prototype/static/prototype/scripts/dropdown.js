"use strict";

$(document).on("click", ".dropdown-trigger", function () {
    console.log("TRIGGERED DROPDOWN!!");
    var t = $(this);
    t.toggleClass("open").toggleClass("closed");
    var chevron = t.children(".fa.fa-fw");
    chevron.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
});
//# sourceMappingURL=dropdown.js.map
