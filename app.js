let sidenav_show = document.querySelector("nav .sidenav-toggle");
let sidenav = document.querySelector(".side-navbar");
let educationbtn = document.querySelector(".qualifications .qualification-header .educationbtn");
let skillsbtn = document.querySelector(".qualifications .qualification-header .skillsbtn");
let edutab = document.querySelector(".qualifications .qualification-content .edu-tab");
let skillstab = document.querySelector(".qualifications .qualification-content .skill-tab");
let sidenav_links = document.querySelectorAll(".side-navbar li a");

sidenav_links.forEach((link)=>{
    link.addEventListener("click", ()=>{
    sidenav.classList.add("hide-sidenav");
    // link.style.color = "#FFB30F";
  })
})

sidenav_show.addEventListener("click", ()=>{
  if(sidenav.classList.contains("hide-sidenav")){
    sidenav.classList.remove("hide-sidenav")
  }else{
    sidenav.classList.add("hide-sidenav")
  }
})


skillsbtn.addEventListener("click", ()=>{
  edutab.style.transform ="translateX(-100%)"
  skillstab.style.transform="translateX(0)"
  skillsbtn.classList.add("tab-active");
  educationbtn.classList.remove("tab-active");
})
educationbtn.addEventListener("click", ()=>{
  edutab.style.transform ="translateX(0)"
  skillstab.style.transform ="translateX(100%)"
  educationbtn.classList.add("tab-active")
  skillsbtn.classList.remove("tab-active")
})