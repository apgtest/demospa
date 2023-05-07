/*Activar y desactivar el menu*/
const  nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list");
const menu = document.querySelector(".menu-mb");
const cancel = document.querySelector(".cancel-mb");

/*Seccion de Galeria*/

menu.onclick = () =>{
    navlist.classList.add("active");
    menu.classList.add("hidden");
}


/*Remueve el nav bar al ejecutarse*/
nav.addEventListener("click", (e) =>{
    if(!e.target.matches(".nav a")) return false;
    navlist.classList.remove("active");
    menu.classList.remove("hidden");
    

});

/*Cierra el menu bar*/
cancel.onclick = () =>{
    navlist.classList.remove("active");
    menu.classList.remove("hidden");
}


