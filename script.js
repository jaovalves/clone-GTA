const botao = document.querySelector(".comprar__botao");

const elementoPlataformas = document.querySelector(".comprar__botao__plataformas");

botao.addEventListener("click", () => {

elementoPlataformas.classList.toggle("ativo");
});