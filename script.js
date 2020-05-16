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
   // console.log(scrollY);
})

document.querySelectorAll(".radiobtn").forEach(x => {
   
   document.querySelectorAll(".radiobtn").forEach(x => {x.classList.remove("selected")})
   // document.querySelectorAll(".radiobtn").forEach(x => {x.style.border = "1px solid black"})
   
   x.addEventListener("click", (e) => {
      
      e.target.classList.add("selected");
         if (e.target.classList.contains("rb1")){
            document.querySelector(".editheading").innerText = "Lorem Ipsum One"
            document.querySelector(".edittext").innerText = "lorem ipsum lorem ipsum"      
         } else if (e.target.classList.contains("rb2")){
            document.querySelector(".editheading").innerText = "Lorem Ipsum Two";
            document.querySelector(".edittext").innerText = "lorem ipsum lorem ipsum lorem lorem lorem";
         } else if (e.target.classList.contains("rb3")){
            document.querySelector(".editheading").innerText = "Lorem Ipsum Three";
            document.querySelector(".edittext").innerText = "lorem ipsum lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum";
         }         
      
      
   })
})


// on click on any radiobtns,
// remove selected from all radiobtns
//    add class of selected to clicked rb
//    if rb1, change inner text to one
//    if rb2, change inner text to one
//    if rb3, change inner text to one


// in CSS, for selected, remove bottom border, change bg color