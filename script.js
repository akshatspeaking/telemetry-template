// function scrollFunction() {
//    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//      document.getElementById("header").style.backgroundColor = "#ff887b";
//    } else {
//      document.getElementById("header").style.backgroundColor = "transparent";
//    }
//  } 

const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const scroll = window.scrollY;
document.addEventListener("scroll", (e) => {

   let offset = window.scrollY;
   hero.style.backgroundPositionY = -offset * 0.5 + "px";

   if (scrollY >= 848) {
      header.style.backgroundColor = "#ff887bdc";
   }
   else {
      header.style.backgroundColor = "transparent";
   }
   console.log(scrollY);
})

document.querySelectorAll(".radiobtn").forEach(x => {
   x.addEventListener("click", (e) => {
      document.querySelectorAll(".radiobtn").forEach(x => {x.style.border = "1px solid black"})
      e.target.style.border = "none";
      document.querySelector(".editheading").innerText = "Lorem Ipsum One"
      document.querySelector(".edittext").innerText = "lorem ipsum lorem ipsum"
      
   })
})
