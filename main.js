import './style.css'

const viewBtn = document.querySelectorAll("[data-btn]")
const profile = document.querySelector("[data-profile]")
const job = document.getElementById("job")
const option = document.getElementById("option")
const cross = document.querySelectorAll("[data-cross]")

viewBtn.forEach(el=>{
    el.addEventListener("click",()=>{
            job.style.display="flex"
    })
})

profile.addEventListener("click",()=>{
    option.style.display="flex"
})

cross.forEach(el=>{
    el.addEventListener("click",(e)=>{
        if (option.style.display === "flex") option.style.display = "none"
        if (job.style.display === "flex") job.style.display = "none"
    })
})