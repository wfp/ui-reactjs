
/* TAB Selector simple */
$(document).on("click", ".tab-selector a", function(e){
  var $this = $(this);
  if ($this.hasClass("active")){}
  else {
    $(".tab-selector a").removeClass("active");
    	$this.addClass("active").parent().parent().toggleClass("selected-az").toggleClass("selected-topics");
  }
  e.preventDefault();
});
