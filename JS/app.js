let start = document.getElementById("start");
let startmenu = document.getElementsByClassName("startmenu")[0];

const article = document.querySelector(".article");

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
  article.style.transform = "scale(1)"
  article.style.opacity = "1"
  article.style.bottom = "3rem";

  if (explorerClicked == 2) {

    article.style.transform = "scale(0)"
    article.style.bottom = "-50rem";
    article.style.opacity = "0"
    explorerClicked = 0
  }
});

minbtn.addEventListener("click", () => {
  article.style.bottom = "-50rem ";
  
  article.style.transform = "scale(0)"
  article.style.opacity = "0"
  explorerClicked = 0
});
closebtn.addEventListener("click", () => {
  
  article.style.opacity = "0"
  article.style.transition = ".01s ease!important"
  setTimeout(() => {
    article.style.bottom = "-50rem ";
    
  }, 300);
  explorerClicked = 0
});




////////////////////DRAGGGGGGGGGGGG LOGIIIIIIIICCCCCCCCCCCC


 // Make the DIV element draggable:
 dragElement(document.getElementById("mydiv"));

 function dragElement(elmnt) {
   var pos1 = 0,
     pos2 = 0,
     pos3 = 0,
     pos4 = 0;
   if (document.getElementById(elmnt.id + "header")) {
     // if present, the header is where you move the DIV from:
     document.getElementById(elmnt.id + "header").onmousedown =
       dragMouseDown;
   } else {
     // otherwise, move the DIV from anywhere inside the DIV:
     elmnt.onmousedown = dragMouseDown;
   }

   function dragMouseDown(e) {
     e = e || window.event;
     e.preventDefault();
     // get the mouse cursor position at startup:
     pos3 = e.clientX;
     pos4 = e.clientY;
     document.onmouseup = closeDragElement;
     // call a function whenever the cursor moves:
     document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
     e = e || window.event;
     e.preventDefault();
     // calculate the new cursor position:
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     // set the element's new position:
     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
   }

   function closeDragElement() {
     // stop moving when mouse button is released:
     document.onmouseup = null;
     document.onmousemove = null;
   }
 }



















header = article.querySelector("header");


// function onDrag({movementX,movementY}){
//   let getStyle = window.getComputedStyle(header);
//   let left = parseInt(getStyle.left);
//   let top = parseInt(getStyle.top);
//   // console.log(left, top);
//   wrapper.style.left = `${left + movementX}px`;
//   wrapper.style.top = `${top + movementY}px`;

// }


// header.addEventListener("mousedown", () => {
//   header.addEventListener("mousemove", onDrag);
// });

// window.addEventListener("mouseup", () => {
//   header.removeEventListener("mousemove", onDrag);
// });

// function update(ev) {
//   article.style.setProperty("left", `${ev.x - 200}px`);
//   article.style.setProperty("top", `${ev.y - 25}px`);
// }

let percentage = document.querySelector("percentage");
let percent = document.querySelector(".percent");

navigator.getBattery().then(function (battery) {
  // percentage.style.width = battery.level * 100 + "%";
  percent.innerHTML = Math.round(battery.level* 100) + "%";
});












/////////// Tray time
const okay = document.getElementById("okay");
const bg = document.getElementById("background-image");
okay.addEventListener("click",()=>{
  var backUrl = document.getElementById("url-box").value;
  if(backUrl==""){
    bg.setAttribute("src", "Resource/6233787.jpg");
  }else{

    bg.setAttribute("src", backUrl);
  }
  console.log(backUrl);

})















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
