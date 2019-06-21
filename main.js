(function() {
    "use strict";

    window.addEventListener("load", init);
    
    function init() {
        let body = document.getElementById("body");
        fadeIn(body);
    }
        
    function fadeIn(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 100);
    }

})