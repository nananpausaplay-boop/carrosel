//captura  o botão "proximo"
let btnProximo = document.getElementById("proximo");
//Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");
//Captura o quadro onde a fotografia é exibida
let Quadroimagem = document.getElementById("imagem");
//Cria o album e guarda as fotos
let album= [
     "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"
]
//Quando o botão próximo for clicando,
//executará a função mostrarpróximo

btnProximo.addEventListener("click", mostrarProximo);
btnAnterior.addEventListener("click", mostrarAnterior)
// define a posição incial da fotografia do album
let foto = 0
//função responsavel por mostrar a proxima fotografia
function mostrarProximo(){
    //avança  uma posição dp album
    foto = foto + 1;
    if  (foto >= album.length){
        //Volta a posição inicial
        foto=0;
}
    Quadroimagem.src= album[foto]; 
    if(foto<0){
        foto= album.length - 1
    }

}

function mostrarAnterior(){
    foto = foto - 1;
    Quadroimagem.src= album[foto]
}

