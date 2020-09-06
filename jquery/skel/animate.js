$(document).ready(function(){
    $(document).keydown(function(e){
        if (e.defaultPrevented) {
            return;
        }
        switch(e.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                // TODO: MOVE BOX TO THE LEFT
                break;
            
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                // TODO: MOVE BOX TO THE RIGHT
                break;
            default:
                return;
        }

        e.preventDefault();
    });
});