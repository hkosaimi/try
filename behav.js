let menu = document.querySelector(".ham-menu");
let navbar = document.querySelector(".responsive-menu"); 
let logo = document.querySelector(".logo");
menu.onclick = function(){
    menu.classList.toggle("change");
    navbar.classList.toggle("show");
    
    
}