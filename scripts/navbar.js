const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu");
const nav_btns = document.querySelectorAll(".nav-link");
let navActive = false;
navBtn.addEventListener("click", ()=>{
    if(!navActive){
        navBtn.src = "./images/cross.png";
        navActive=true;
        navMenu.style = `
            display: flex;
            // background-color: #ffffff;
            width: 100vw;
            position: fixed;
            box-shadow: none;
            margin: 0;
            border-radius:0;
            transition: 1s;
        `;
    } else {
        navBtn.src = "./images/menu-burger.png";
        navActive=false;
        navMenu.style.display = "none";
    }
})

nav_btns.forEach((el)=>{
    el.addEventListener("click", ()=>{
        navBtn.src = "./images/menu-burger.png";
        if(window.innerWidth<=768){
            navActive=false;
            navMenu.style.display = "none"; 
        } 
    })
})