
function main(){
    posicion=0;
cuadrito=document.getElementById("cuad");
addEventListener("keydown",(event) =>{ 
    if(event.key=="ArrowLeft"){
        posicion-=10;
        ;
    } else if (event.key=="ArrowRight"){
        posicion+=10;
        
    }
    cuadrito.style.transform = `translateX(${posicion}px)`;
});
}

main();