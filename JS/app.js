let start = document.getElementById("start");
let startmenu = document.getElementsByClassName("startmenu")[0];

let article = document.querySelector(".article");

let closebtn = document.getElementById("closebtn");
let minbtn = document.getElementById("minbtn");
let open = document.getElementById("open");

var startclicked = 0;

start.addEventListener("click", () => {
  startclicked += 1
  startmenu.style.bottom = "3rem";
  
  if (startclicked == 2) {

    startmenu.style.bottom = "-50rem";
    startclicked = 0
  }
});

const bottom = article.style.bottom;
var explorerClicked = 0


open.addEventListener("click", () => {
  explorerClicked += 1
  // article.classList.add("open-animation")
  // article.classList.remove("close-animation")
  article.style.transform = "scale(1)"
  article.style.opacity = "1"
  article.style.bottom = "3rem";

  if (explorerClicked == 2) {

    article.style.transform = "scale(0)"
    article.style.bottom = "-50rem";
    article.style.opacity = "0"
    // article.classList.remove("open-animation")
    // article.classList.add("close-animation")
    explorerClicked = 0
  }
  // if (article.style.bottom == bottom) {
  //   article.style.bottom = "-50rem";
  //   article.style.transition = "0.4s ease-in";
  // } else {
  //   article.style.bottom = "3rem";
  //   article.style.transition = "0.6s ease-in";
  // }
});

minbtn.addEventListener("click", () => {
  article.style.bottom = "-50rem ";
  
  article.style.transform = "scale(0)"
  article.style.opacity = "0"
  // setTimeout(() => {
    
  // }, 200);
  explorerClicked = 0
});
closebtn.addEventListener("click", () => {
  
  // article.style.transform = "scale(0)"
  article.style.opacity = "0"
  article.style.transition = ".01s ease!important"
  setTimeout(() => {
    article.style.bottom = "-50rem ";
    
  }, 300);
  explorerClicked = 0
});

const header = document.getElementById("header");

header.addEventListener("mousedown", () => {
  header.addEventListener("mousemove", update);

  window.addEventListener("mouseup", () => {
    header.removeEventListener("mousemove", update);
  });
});

function update(ev) {
  article.style.setProperty("left", `${ev.x - 200}px`);
  article.style.setProperty("top", `${ev.y - 25}px`);
}

let percentage = document.querySelector("percentage");
let percent = document.querySelector(".percent");

navigator.getBattery().then(function (battery) {
  // percentage.style.width = battery.level * 100 + "%";
  percent.innerHTML = Math.round(battery.level* 100) + "%";
});

// timeholder = document.querySelector(".timenow");
/*
let now = new Date();

dayholder = document.getElementById("day");

let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[now.getDay()];

n = dayholder.innerHTML;*/

let a,
date,
time,
hour,
minute;
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const week = {
  weekday: "long",
};

setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  hour = a.getHours();
  minute = a.getMinutes();
  day = a.toLocaleDateString(undefined, week);
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  time = hour + ":" + minute;

  // document.getElementById("day").innerHTML = day;
  document.getElementById("timenow").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}, 1000);

function myFunction() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Check whether AM or PM
  var newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  document.getElementById("timenow").innerHTML =
    hours + ":" + minutes + " " + newformat;
}

/*
function myFunction() {
  let d = new Date();
  let n = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("timenow").innerHTML = n;
} */
