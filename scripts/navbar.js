const navBtn = document.getElementById("nav-btn");
const navMenue = document.getElementById("nav-menu");
let navActive = false;
navBtn.addEventListener("click", ()=>{
    if(!navActive){
        navBtn.src = "./images/cross.png"
        navActive=true;
        navMenue.style = `
            display: flex;
            background-color: #ffffff;
            width: 100vw;
            position: absolute;
            box-shadow: none;
            margin: 0;
            border-radius:0;
        `;
    } else {
        navBtn.src = "./images/menu-burger.png"
        navActive=false;
        navMenue.style.display = "none";
    }
})