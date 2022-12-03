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
    }, 1000);

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

let selectedBirthday;
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event) => {
    // event.target == birthdayInput
    // convert to datee from dateString
    selectedBirthday = new Date(event.target.value);
    if (selectedBirthday > new Date()) {
        alert("Selected birthday is invalid!");
        return;
    }

    document.body.style.backgroundImage = "ur1('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.18ixid-eyJhcHBfawQiojEyMDd9&auto=format&fit=crop&W=13498g-80')";

    loading.style.display = "block";
    setInterval(updateCountdown, 1000);
    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);
});

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday. getMonth();
    let dobDay = selectedBirthday. getDate();
    let dobHours = selectedBirthday. getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobseconds = selectedBirthday. getSeconds();

    let now = new Date();

    let currentYear = selectedBirthday. getFullYear();
    let currentMonth = selectedBirthday. getMonth();
    let currentDay = selectedBirthday.getDate();
    let currentHours = selectedBirthday. getHours();
    let currentMinutes = selectedBirthday.getMinutes();
    let currentSeconds = selectedBirthday.getSeconds();
    
}