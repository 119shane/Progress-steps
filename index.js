 const progressBar = document.getElementById('progress')
 const prevBtn = document.getElementById('prev')
 const nextBtn = document.getElementById('next')
 const circles = document.querySelectorAll(".circle")

 let activeIndex = 1

 nextBtn.addEventListener('click', ()=> {
    activeIndex++

    if (activeIndex > circles.length) {
        activeIndex = circles.length
    }
    update()
 })


 prevBtn.addEventListener('click', ()=> {
    activeIndex--

    if (activeIndex < 1 ) {
        activeIndex = 1 
    }
    update()

 })

 function update() {
    circles.forEach((circle, indx)=>{
        if(indx < activeIndex) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const activeClasses = document.querySelectorAll(".active")
    progressBar.style.width =  (activeClasses.length-1)/(circles.length-1)*100 + "%"
 
    if(activeIndex === 1) {
        prevBtn.disabled = true
    } else if (activeIndex === circles.length) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
        prevBtn.disabled = false
    }
}



 

