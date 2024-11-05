const navBtn = document.querySelector("#navBtn")
const mobilelink = document.querySelector("#mobilelink")
const bars = document.querySelector("#bars")

navBtn.addEventListener("click" , () =>{ 
    bars.classList.toggle("fa-circle-xmark")
    mobilelink.classList.toggle("showmobilekink")
})

