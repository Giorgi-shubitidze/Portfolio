//const coverImgEl = document.getElementsByClassName("coverImg")
//const buttonEl = document.getElementsByClassName("btn")

//for (let i = 0; i < coverImgEl.length; i++ ) {
//  if(coverImgEl[i].src = "images/ComingSoon.png") {
///    for(let i = 0; i < buttonEl.length; i++) {
//        buttonEl.style.display = "none"
//    }
//  }
//}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const img = box.querySelector("img");
  const anchor = box.querySelector("h1");
  console.log(img.src);
  if (img.getAttribute("src") === "images/ComingSoon.png") {
    anchor.remove();
  }
});


function mail() {
    document.querySelector(".mail").classList.toggle("myMail")
}

function menuEl() {
    document.querySelector(".menu").classList.toggle("show")
}


function videop1() {
    var project = document.querySelector(".twitch").classList.toggle("twitchtog")
    var name = document.querySelector(".pjname").classList.toggle("pjnametog")
    var p = document.querySelector(".pj1").classList.toggle("pj1tog")
    var btn = document.querySelector(".fbtn1").classList.toggle("btntog")
}

function videop2() {
    var project = document.querySelector(".musicApp").classList.toggle("musicAPPtog")
    var name = document.querySelector(".pjname").classList.toggle("pjnametog")
    var p = document.querySelector(".pj2").classList.toggle("pj2tog")
    var btn = document.querySelector(".fbtn2").classList.toggle("btntog")
}

function videop3() {
    var project = document.querySelector(".singIn").classList.toggle("signIntog")
    var name = document.querySelector(".pjname").classList.toggle("pjnametog")
    var p = document.querySelector(".pj3").classList.toggle("pj3tog")
    var btn = document.querySelector(".fbtn3").classList.toggle("btntog")
}

