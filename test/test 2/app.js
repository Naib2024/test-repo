const progress = document.querySelector("#progress")
const circles = document.querySelectorAll(".circle")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

let = currentActive = 1

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    uptade()
});

    prev.addEventListener("click", () => {
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1  
        }

        uptade()
    });

    function uptade(){
        circles.forEach((circle,index) =>{
            if(index < currentActive ){
                circle.classList.add("active")
            }else{
                circle.classList.remove("active")
            }
        })

        const active = document.querySelectorAll(".active")
        // console.log(active.length, circles.length);
        // console.log((active.length / circles.length)*100);
        // console.log((active.length - 1) / (circles.length - 1)*100);
        progress.style.width = (active.length - 1) / (circles.length - 1)*100 + "%";

        if(currentActive === 1){
            prev.disabled = true
        }else if(currentActive === circles.length){
            next.disalbled = true
        }else{
            prev.disabled = false
            next.disabled = false
        }
        
    } 



