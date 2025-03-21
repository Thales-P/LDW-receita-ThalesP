// Botão pra voltar ao topo
window.onscroll = function () {
  const botao = document.getElementById("voltarAoTopo");
  if (document.documentElement.scrollTop > 100) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
};


document.getElementById("voltarAoTopo").onclick = function () {
  window.scrollTo({
    top: 900,
    behavior: "smooth"
  });
};

//Navbar


