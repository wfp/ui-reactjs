"use strict";

$(document).on("mouseover", ".tooltip", function () {
    var msg = "<span>" + $(this).data("tooltip") + "</span>";
    var el = $("<div class='tooltip-container'/>");
    var px = $(this).offset().left;
    var py = $(this).offset().top;
    el.append($(msg));
    $("body").append(el);
    var h = el.height();
    var w = $(this).width();
    el.css("top", py - h / 2 - 10);
    el.css("left", px + w + 5);
});

$(document).on("mouseout", ".tooltip", function () {
    $(".tooltip-container").remove();
});