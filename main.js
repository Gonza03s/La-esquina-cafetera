let icono = document.querySelector(".menu__icon");
let contenedor = document.querySelector(".navbar");


icono.addEventListener("click",()=>
{
    contenedor.classList.toggle("show");
})
