
$(document).on("click", ".menuitem, .mock-navigation", function(){ 
  $(".active").removeClass("active");
  var action = $(this).data("action");
  var target = $(this).data("target");
  $(this).addClass("active");
  utils.load_part("#"+target, action, fill_data_list);
  closeSearch();
    
  setTimeout(statuswidgets, 250);
});
