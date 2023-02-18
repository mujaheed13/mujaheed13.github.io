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
            width: 100vw;
            position: fixed;
            box-shadow: none;
            margin: 0;
            border-radius:0;
            transition: 1s;
                -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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