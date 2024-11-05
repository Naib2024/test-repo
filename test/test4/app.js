const open = document.querySelector("#open");
const close = document.querySelector("#close");
const contanier = document.querySelector(".contanier");

open.addEventListener("click", ()=>{
    contanier.classList.add("show-nav")
})

close.addEventListener("click", ()=>{
    contanier.classList.remove("show-nav")
})