! function (t) {

    t(window).on("scroll.posicion");
    var diferenciaBoton = 70;

    $(window).scroll(function (t) {
    
        var aturaDiv = t(".group1").outerHeight();
        var posicionDiv = t(".group1").offset().top;
        var scroll = t(window).scrollTop(); 
        var sumados = posicionDiv + aturaDiv;

        if (scroll < posicionDiv - diferenciaBoton) {   
            t(".open").removeClass("openG1");  }
        if (scroll > posicionDiv - diferenciaBoton && scroll < sumados) {   
            t(".open").addClass("openG1"); }
        if (scroll > sumados - diferenciaBoton) {   
            t(".open").removeClass("openG1");  }

        document.getElementById ("posicion").innerHTML = 
        "<br> scroll: " + scroll + 
        "<br> atura Div: " + aturaDiv +
        "<br> posicion Div: " + posicionDiv +
        "<br> sumados: " + sumados ;

        console.log("dos");

    });

}(jQuery),
function (b) {
function onScroll() {
	update();
}

function update() {
    
	console.log("caraje");
}

window.addEventListener('scroll', onScroll, false);

}(jQuery)