const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");

const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  loading.style.display = "block";
  setTimeout(() => {
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000);

  years.innerHTML = "00";
  months.innerHTML = "00";
  days.innerHTML = "00";
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";

  // let H2Elements = document.getElementsByTagName("h2");
  // for (let index = 0; index < H2Elements.length; index++) {
  //     H2Elements[index].innerHTML = "00";
  // }

  // let H2Elements2 = countdown.querySelectorAll("h2");
  // H2Elements2.forEach((element) => {
  //     element.innerHTML = "00";
  // });
});

let selectedBirthday;
//let birthdayInput = document.querySelector("input[name=birthday]");
let birthdayInput = document.getElementById("birthday");
birthdayInput.addEventListener("change", (event) => {
  selectedBirthday = new Date(event.target.value);
  if(selectedBirthday > new Date()) {
    alert("Selected birthday is invalid!");
    return;
  }

  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.18ixid-eyJhcHBfawQiojEyMDd9&auto=format&fit=crop&W=13498g-80')";

  loading.style.display = "block";
  setInterval(updateCountdown, 1000);
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);

});

const updateCountdown = () => {
  let dobYear = selectedBirthday.getFullYear();
  let dobMonth = selectedBirthday.getMonth();
  let dobDay = selectedBirthday.getDate();
  let dobHour = selectedBirthday.getHours();
  let dobMinute = selectedBirthday.getMinutes();
  let dobSecond = selectedBirthday.getSeconds();

  let now = new Date();

  let currentYear = selectedBirthday.getFullYear();
  let currentMonth = selectedBirthday.getMonth();
  let currentDay = selectedBirthday.getDate();
  let currentHour = selectedBirthday.getHours();
  let currentMinute = selectedBirthday.getMinutes();
  let currentSecond = selectedBirthday.getSeconds();

  let yearOfAge = currentYear - dobYear;
  let monthOfAge = currentMonth - dobMonth;
  let dayOfAge = currentDay - dobDay;
  let hourOfAge = currentHour - dobHour;
  let minuteOfAge = currentMinute - dobMinute;
  let secondOfAge = currentSecond - dobSecond;

  // monthofAge control
  if (monthOfAge < 0) {
    monthOfAge += 12;
    yearOfAge--;
  }
  // dayofage control
  if (dayOfAge < 0) {
    dayOfAge += 30;
    monthOfAge--;
  }
  // hourofAge control
  if (hourOfAge < 0) {
    hourOfAge += 24;
    dayOfAge--;
  }
  //minuteofAge control
  if (minuteOfAge < 0) {
    minuteOfAge += 60;
    hourOfAge--;
  }
  // secondofAge control
  if (secondOfAge < 0) {
    secondOfAge += 60;
    minuteOfAge--;
    }

  // add values to DOM
  years.innerHTML = yearOfAge.toString().padStart(2, "0");
  months.innerTML = monthOfAge.toString().padStart(2, "0");
  days.innerHTML = dayOfAge.toString().padStart(2, "0");
  hours.innerHTML = hourOfAge.toString().padStart(2, "0");
  minutes.innerTML = minuteOfAge.toString().padStart(2, "0");
  seconds.innerHTL = secondOfAge.toString().padStart(2, "0");
};
