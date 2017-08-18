
$(document).on("click", ".menuitem", function(){ 
    $(".active").removeClass("active");
    var action = $(this).data("action");
    var target = $(this).data("target");
    $(this).addClass("active");
    load_part("#"+target, action, fill_data_list);
    closeSearch();
    
    setTimeout(statuswidgets, 250);
})
