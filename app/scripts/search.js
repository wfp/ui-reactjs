//starting status
var opened = false;

//focus ops
$(document).on("focus", "#search", function(){
    utils.heights();
    openSearch();
});

//toggle via focus
function toggleSearchFocus(){
    if (opened){
        $("#search").blur();
        closeSearch();
    }
    else
        $("#search").focus();
}

//toggle via code
function toggleSearch(){
    if (opened)
        closeSearch();
    else
        openSearch();
}

//open
function openSearch(){
    opened = true;
    filtered_by_search = [];
    $("#overlay").show();
    $(".content-search").show();
    $("#forms-latest").show();
    $("#forms-filtered").hide();
}

//close
function closeSearch(){
    opened = false;
    $("#overlay").hide();
    $(".content-search").hide();
}

$(document).on("click", ".closer", function(){
    closeSearch();
});

$(document).on("click", "#overlay", function(e){
    if (e.target !== this)
        return;
    closeSearch();
});


$("#overlay").hide();
$(".content-search").hide();
$("#forms-filtered").hide();

var filtered_by_search = [];
var filtered_howtos = [];
var filtered_links = [];
$(document).on("keypress", "#search", function(ev){
    var v = $(this).val()+ev.key;
    if (v.length >= 3){
        filtered_by_search = formslist_by_az.filter(function(itm,i){
            return itm.name.toLowerCase().indexOf(v.toLowerCase())>=0 || itm.description.toLowerCase().indexOf(v.toLowerCase())>=0;
        });
        filtered_howtos = search_how_to.filter(function(itm,i){
            return itm.name.toLowerCase().indexOf(v.toLowerCase())>=0 || itm.description.toLowerCase().indexOf(v.toLowerCase())>=0;
        });
        filtered_links = search_links.filter(function(itm,i){
            return itm.name.toLowerCase().indexOf(v.toLowerCase())>=0 || itm.description.toLowerCase().indexOf(v.toLowerCase())>=0;
        });

        if(filtered_by_search.length+filtered_howtos.length+filtered_links.length > 0){
            $("#forms-latest").hide();
            $("#forms-filtered").show();
        } else {
            $("#forms-latest").show();
            $("#forms-filtered").hide();
        }
        fill_data_list("#forms-filtered");
    }
});