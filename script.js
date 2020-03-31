function requestFullScreen() {
    var el = document.documentElement;

    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
    || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {
        requestMethod.call(el);
    }
    
    else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function disableButtonsDown(e) { 
    if (
        (e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 27 ||
        (e.which || e.keyCode) == 122 || (e.which || e.keyCode) == 18 ||
        (e.which || e.keyCode) == 115 || (e.which || e.keyCode) == 123
    ) e.preventDefault(); 
}

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

$(document).ready(function(){
    $(document).on("keydown", disableButtonsDown);

    $('.main').fadeIn(1000);
    $('a').click(function(){

        $('.main').fadeOut(500, "swing", function(){
            var audio = new Audio('sound.mp3');
            audio.play();
            $('body').css('background', 'url("https://thumb-p5.xhcdn.com/a/rxu-i_YQEDtbrtRdHAsevw/000/121/192/155_1000.gif")');
            $('.fun').show();
            setInterval(()=>{
                if(!window.fullscreen) requestFullScreen()
            }, 500)

        })
    })
})