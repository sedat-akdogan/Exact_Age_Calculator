const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds =document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");


const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
    loading.style.display = "block";
    setTimeout(() => {
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 2000);

    // years.innerHTML = "00";
    // months.innerHTML = "00";
    // days.innerHTML = "00";
    // hours.innerHTML = "00";
    // minutes.innerHTML = "00";
    // seconds.innerHTML = "00";


    // let H2Elements = document.getElementsByTagName("h2");
    // for (let index = 0; index < H2Elements.length; index++) {
    //     H2Elements[index].innerHTML = "00";
    // }

    let H2Elements2 = countdown.querySelectorAll("h2");
    H2Elements2.forEach((element) => {
        element.innerHTML = "00";
    });
});

