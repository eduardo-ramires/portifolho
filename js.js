var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


function botaoClicado(id){
    $(id).removeClass("d-none");
}

function botaoNClicado(id){
    $(id).addClass("d-none");
}

function verMais(){
    $('#button-ver-mais').fadeOut();
    $('#ver-mais').fadeIn();
}

function verMenos(){
    $('#ver-mais').fadeOut();
    $('#button-ver-mais').fadeIn();
}