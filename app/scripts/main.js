



function load_part(target, name, callback){
    //view load
    try{
        $(target).load("views/"+name+".html", function(){
            if(callback){
                callback();
            }
        });
    } catch( ex ){
        console.log("views/"+name+".html not found");
    }
    //script load
    try{
        $.getScript("scripts/"+name+".js");
    } catch( ex ){
        console.log("scripts/"+name+".js not found");
    }
    
}
function load_part_complex(target, pages, scripts){
    //view load
    for(var i in pages){
        let name = pages[i];
        try{
            $(target).load("views/"+name+".html");
        } catch( ex ){
            console.log("views/"+name+".html not found");
        }
    }
    //script load
    
    for(var i in scripts){
        let name = scripts[i];
        try{
            $.getScript("scripts/"+name+".js");
        } catch( ex ){
            console.log("scripts/"+name+".js not found");
        }
    }
}

var ops = {
    "#":["#","#"],
};

var search = {
    
};

function heights(){
    $("#overlay").height($(document).height());
}

$(function(){
    load_part("#navbar", "navbar");
    load_part("#sidebar", "sidebar");
    load_part("#content", "page_home");
    load_part("#footer", "footer");
    load_part("#overlay", "search");
    statuswidgets();
    heights();
});
