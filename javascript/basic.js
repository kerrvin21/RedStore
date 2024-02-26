let menu = document.querySelector('#menu-btn');
let closeMenu = document.querySelector(".close-nav-btn")
let navigation = document.querySelector("#navigation-menu")
let body = document.querySelector("body")


function toggleMenu() {
    navigation.classList.toggle("active");
    body.classList.toggle("disable-scroll")
}

navigation.addEventListener("transitionend",()=>{
    navigation.classList.toggle("active2")
})

menu.addEventListener("click", () => toggleMenu())
closeMenu.addEventListener("click", () => toggleMenu())
navigation.addEventListener("click", ()=>toggleMenu())