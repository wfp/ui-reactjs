
$(document).on("click", ".accordion-head", function(){ 
    $(this).parent().parent().toggleClass("open").toggleClass("closed");
})
