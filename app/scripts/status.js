function statuswidgets(){
    $(".status-widget").each(function(i,e){
        var steps = $(e).data("steps");
        var done = $(e).data("done");
        var state = $(e).data("state");
        var require_action = $(e).data("require_action");
        var require_action_msg = $(e).data("require_action_msg");

        for(var i = 1; i <= steps; i++){
            var dot = $("<div class='dot'></div>");
            var edge = $("<div class='edge'></div>");
            if(i <= done){
                dot.addClass(state);
                if(i==done){
                    if(require_action){
                        dot.addClass("action");
                    }
                    if(require_action_msg){
                        dot.addClass("tooltip");
                        dot.attr("data-tooltip", require_action_msg);
                    }
                }
            }

            if(i < done)
                edge.addClass(state);
            $(e).append(dot);
            if(i < steps ){
                $(e).append(edge);
            }
        }
    });
}