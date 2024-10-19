const body = document.querySelector("body"),
    nav = document.querySelector('nav'),
    navbar = document.querySelector(".navbar")
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle "),
    siderbarClose = document.querySelector(".siderbarClose"),
    sidebarOpen = document.querySelector(".sidebarOpen");

// for dark mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active")
    body.classList.toggle("dark")
})
// for search 
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active")

})

// toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active")
}) 

body.addEventListener("click", e => {
   let clickedElm = e.target

   if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
    navbar.classList.remove("active")

   }
}) 