const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBox)

checkBox()

function checkBox() {
    const triggerBotom = (window.innerHeight / 6 ) * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBotom){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
}