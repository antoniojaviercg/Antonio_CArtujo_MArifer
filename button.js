const  btn = document.getElementById("btn");
var contador = 0;

function cambio(){
    if(contador==0){
        btn.classList.add("button__up");
        contador=1;
    }else if(contador==1) {
        btn.classList.add("button__bottom");
        btn.classList.remove("button__up");
        contador=2;
    }
    else{
        btn.classList.remove("button__bottom");
        contador=0;
    }
}

btn.addEventListener("click",cambio,true);
