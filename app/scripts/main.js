var ops = {
    "#":["#","#"],
};

var search = {};

var utils = {
    heights: function(){
        $("#overlay").height($(document).height());
    },
    load_part: function(target, name, callback){
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
    },
    load_part_complex: function(target, pages, scripts){
        //view load
        for(var i in pages){
            let name = pages[i];
            try{
                $(target).load("views/"+name+".html");
            } catch( ex ){
                console.log("views/"+name+".html not found");
            }
        }
        
        for(var i in scripts){
            let name = scripts[i];
            try{
                $.getScript("scripts/"+name+".js");
            } catch( ex ){
                console.log("scripts/"+name+".js not found");
            }
        }
    },
}

$(function(){
    utils.load_part("#navbar", "navbar");
    utils.load_part("#sidebar", "sidebar");
    utils.load_part("#content", "page_home");
    utils.load_part("#footer", "footer");
    utils.load_part("#overlay", "search");
    statuswidgets();
});
