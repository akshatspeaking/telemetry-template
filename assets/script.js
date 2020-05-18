let clicker = document.querySelector(".rb1");


// Hamburger icon click
let c = 0;
function showHeader(e) {
   
   if (c == 0) {
      
      let ham = document.querySelector(".fa-bars")
      let cross = document.createElement("i");
      cross.classList.add("fas");
      cross.classList.add("fa-times");
      document.getElementById("hamburger-icon").replaceChild(cross, ham);
      
      document.querySelector(".mobilenav").style.display = "flex";

      console.log("ss")

      c = 1;}
      else if (c == 1) {
         let ham = document.createElement("i");
         ham.classList.add("fas");
         ham.classList.add("fa-bars");
         
      // let cross = document.createElement("i");
      // cross.classList.add("fas");
      // cross.classList.add("fa-times");
      let cross = document.querySelector(".fa-times")

         document.getElementById("hamburger-icon").replaceChild(ham, cross);

         document.querySelector(".mobilenav").style.display = "none";
         
         console.log("c")

         c = 0;   
      }
}


document.getElementById("hamburger-icon").addEventListener("click", showHeader);

// Header parallax scrolling 
const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const scroll = window.scrollY;
document.addEventListener("scroll", (e) => {

   let offset = window.scrollY;
   hero.style.backgroundPositionY = -offset * 0.5 + "px";

   if (scrollY >= 898) {
      header.style.backgroundColor = "#ff887bdc";
   }
   else {
      header.style.backgroundColor = "transparent";
   }
   // console.log(scrollY);
})



// Radio Button section - change text on different button clicks
document.querySelectorAll(".radiobtn").forEach(x => {
   

   
   x.addEventListener("click", (e) => {

      document.querySelectorAll(".radiobtn").forEach(x => {
         x.classList.remove("selected");
         x.style.transform = "scale(1)";
         x.style.color = "black";
      })

      e.target.style.color = "tomato"
      e.target.classList.add("selected");
      e.target.style.transform = "scaleY(1.2)";
      e.target.style.borderTop = "1.5px solid grey";
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

clicker.click();

// on click on any radiobtns,
// remove selected from all radiobtns
//    add class of selected to clicked rb
//    if rb1, change inner text to one
//    if rb2, change inner text to one
//    if rb3, change inner text to one


// in CSS, for selected, remove bottom border, change bg color