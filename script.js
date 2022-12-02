const years = document.getElementsById("years");
const months = document.getElementsById("months");
const days = document.getElementsById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds =document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");


const loading = document.querySelector(".loading");
window.addEventListener("load", () =>{
    loading.getElementsByClassName.display = "block";
    // milliseconds in setTimeout 
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "block";
    }, 2000);
});

