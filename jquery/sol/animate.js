$(document).ready(function(){
    $(document).keydown(function(e){
        if (e.defaultPrevented) {
            return;
        }
        switch(e.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                $('#box').animate({ "left": "-=50px" }, "slow" );
                break;
            
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                $('#box').animate({ "left": "+=50px" }, "slow" );
                break;
            case "Up": // IE/Edge specific value
            case "ArrowUp":
                $('#box').animate({ "top": "-=50px" }, "slow" );
                break;
            case "Down": // IE/Edge specific value
            case "ArrowDown":
                $('#box').animate({ "top": "+=50px" }, "slow" );
                break;
            default:
                return;
        }

        e.preventDefault();
    });
});