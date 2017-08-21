function modal(title, content, actions, options){
    $("#overlay").show();
    if (options === undefined)
        options = {};
    var ret = $("<div class='modal' />");
    ret.append("<div class='header'>"+title+"</div>");
    ret.append("<div class='body'>"+content+"</div>");
    var xx = "<div class='footer'>";
    for(let opt of actions){
        xx +="<button class='wfp-btn pull-right modal-btn' data-modal-options="+JSON.stringify(options)+" data-modal-result='"+opt.type+"'>"+opt.name+"</button>";
    }
    xx += "</div>";
    ret.append(xx);
    $("#overlay").append(ret);
}

$(document).on("click", ".modal-btn", function(){
    $("#overlay").hide();
    var result = $(this).data("modal-result");
    console.log(result);
    var opts = $(this).data("modal-options");
    console.log(opts);
    let modalClosed = new CustomEvent("modalclosed", {detail:{result:result, options:opts}});
    window.dispatchEvent(modalClosed);
    $(".modal").remove();
});

function modal_alert(title, content, confirm_string, options){
    return modal(title, content, [
        {name: confirm_string, type:"confirm"},
    ], options);
}

function modal_prompt(title, content, confirm_string, options){
    return modal(title, content, [
        {name:"Cancel", type:"cancel"},
        {name: confirm_string, type:"confirm"},
    ], options);
}

function modal_confirm(title, content, confirm_string, options){
    return modal(title, content, [
        {name: confirm_string, type:"confirm"},
        {name:"Cancel", type:"cancel"}
    ], options);
}

function modal_delete(delete_information, options){
    return modal("Delete", "This action will delete your request.", [
        {name: "Delete", type: "confirm", class: "wfp-btn--danger"},
        {name: "Cancel", type: "cancel"}
    ], options);
}



$(document).on("click", ".modal-trigger", function(){
    var t = $(this);
    var mode = t.data("modal-mode");
    var title = t.data("modal-title");
    var content = t.data("modal-content");
    var confirm = t.data("modal-confirm");
    var options = t.data("modal-options");
    var actions = t.data("modal-actions");
    
    switch (mode) {
        case "alert":
            modal_alert(title,content,confirm, options);
            break;
            
        case "prompt":
            modal_prompt(title,content,confirm, options);
            break;

        case "confirm":
            modal_confirm(title,content,confirm, options);
            break;
    
        case "delete":
            modal_delete(deletion,options);
            break;
            
        default:
            modal(title,content,actions,options);
            break;
    }

});
