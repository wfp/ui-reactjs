
function fill_data_list(selector){
    var base = $(".fill-data-list");
    if (selector !== undefined)
        base = $(selector).find(".fill-data-list");
    base.each(function(i,e){
        var el = $(e);
        fill_data_list_el(el,"");
    });
    fill_data();
    
    $("table").tablesorter();
}

function fill_data_list_el(el, base_c){
    var tm = el.children(".template").first();
    var temp_mode = el.data("list");
    if(tm.length > 0){
        var c = el.data("content");
        var l = eval(base_c+c);
        if (debug)console.log(c,l);
        el.empty();
        for (var vi in l){
            var f = tm.clone(true,true).removeClass("template");
            $(f).find(".fill-data-list-item").each(function(ii,ie){
                var it = $(ie);
                var fm = it.data("fill-mode");
                var vn = base_c+c+"["+vi+"].";
                if (fm == "list")
                    fill_data_list_el(it, base_c+c+"["+vi+"]"+".");
                else{
                    var ic = it.data("content");
                    var ig = it.data("fill-attribute");   
                    if(ic.indexOf("|")>=0){ //multiel
                        var ics = ic.split("|");
                        var igs = ig.split("|");
                        for(var ici in ics){
                            var lvn = vn+ics[ici];
                            var v = eval(lvn);
                            if(igs[ici] == "class")
                                it.addClass(v+"");
                            else
                                it.attr(igs[ici],v);
                        }
                    } else {
                        vn+=ic;
                        if (debug) console.log(vn);
                        var v = eval(vn);
                        if (ig){
                            if(ig == "class")
                                it.addClass(v+"");
                            else
                                it.attr(ig,v);
                        } else {
                            it.text(v);
                        } 
                    }
                }
            });
            el.append(f);
        }
        if (temp_mode == "refreshable"){
            let ttm = tm.addClass("template");
            el.append(ttm);
        }
    }
}

function fill_data(){
    $(".fill-data").each(function(i,e){
        var t = $(this);
        var c = t.data("content");
        var v = eval(c);
        var g = t.data("fill-attribute");
        if (g){
            if(g == "class")
                t.addClass(v+"");
            else
                t.attr(g,v);
        } else {
            t.text(v);
        }
    })
}

function hide_hidables(){
    $(".hidable").each(function(e,i){
        
    })
}

$(function(){
    setTimeout(fill_data, 500);
    setTimeout(fill_data_list, 500);
    setTimeout(statuswidgets, 500);
});
