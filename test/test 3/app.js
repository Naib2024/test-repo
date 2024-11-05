const bars = document.querySelector("#bars")
const mobileMenu = document.querySelector("#mobileMenu")
const barsBtn = document.querySelector("#barsBtn")

// bars.onclick = () =>{
//     mobileMenu.classList.toggle("showmobileMenu")
// }

bars.addEventListener("click", () =>{
    barsBtn.classList.toggle("fa-xmark")
    mobileMenu.classList.toggle("showmobileMenu")
})

