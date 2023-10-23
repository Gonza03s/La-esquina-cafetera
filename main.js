let icono = document.querySelector(".menu__icon");
let contenedor = document.querySelector(".navbar");
let enlaceAncla = document.querySelectorAll(".navbar a");


icono.addEventListener("click",()=>
{
    contenedor.classList.toggle("show");
})

enlaceAncla.forEach(enlace=>
    {
        enlace.addEventListener("click",()=>
        {
            contenedor.classList.remove("show");
        })
    })