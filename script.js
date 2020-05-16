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
   
   
   // document.querySelectorAll(".radiobtn").forEach(x => {x.style.border = "1px solid black"})
   
   x.addEventListener("click", (e) => {

      document.querySelectorAll(".radiobtn").forEach(x => {
         x.classList.remove("selected");
         x.style.transform = "scale(1)";
         // |transform-functions|initial|inherit 
   
      })

      e.target.style.transform = "scale(1.2)"
      e.target.classList.add("selected");
         if (e.target.classList.contains("rb1")){
            document.querySelector(".editheading").innerText = "Lorem ipsum dolor sit magna feugiat etiam sed dolor"
            document.querySelector(".edittext").innerText = "Maecenas id feugiat nunc. Integer gravida augue libero, quis pellentesque amet pharetra a. Ut sagittis ipsum nec velit porttitor, sed convallis ligula pellentesque. Mauris et dignissim sem lacinia lorem ipsum dolor."      
         } else if (e.target.classList.contains("rb2")){
            document.querySelector(".editheading").innerText = "Ipsum lorem accumsan sed nullam feugiat veroeros";
            document.querySelector(".edittext").innerText = "Veritatis, accusantium, nemo. Officia neque explicabo nihil! Sunt vero reprehenderit, necessitatibus atque, enim autem animi illum quaerat at, corporis dolore ipsam. Voluptatem culpa sapiente sed veroeros.";
         } else if (e.target.classList.contains("rb3")){
            document.querySelector(".editheading").innerText = "Adipiscing sed impedit volutpat magna cursus lorem";
            document.querySelector(".edittext").innerText = "Perspiciatis saepe, mollitia itaque magna etiam dolor sit amet. Sed rerum porro sint iure illo accusantium in amet totam, est. Ipsa nobis ad optio impedit quidem inventore libero, aperiam, nesciunt dolor sit amet.";
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