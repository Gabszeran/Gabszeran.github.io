// FUNÇÃO MENU HAMBÚRGUER
function abrirFecharMenu() {
  let menuHamburguer = document.querySelector(".nav-menu-hamburguer");
  let botaoMenuHamburguer = document.querySelector(".icone-menu-hamburguer");

  // Verifica se o menu hamburguer está visível verificando se ele possui a classe "ativo"
  let menuHamburguerAtivo = menuHamburguer.classList.contains("ativo");

  // Se o menu hambúrguer não estiver ativo, adiciona a classe "ativo" para torná-lo visível
  if (!menuHamburguerAtivo) {
    menuHamburguer.classList.add("ativo");
    // Altera o ícone para o ícone de fechar o menu
    botaoMenuHamburguer.innerHTML =
      '<img class="icon" src="img/x.png" alt="ícone">';
  } else {
    // Se estiver ativo, remove a classe "ativo" para ocultá-lo
    menuHamburguer.classList.remove("ativo");
    // Altera o ícone para o ícone de abrir o menu
    botaoMenuHamburguer.innerHTML =
      '<img class="icon" src="img/menu.png" alt="ícone">';
  }
}

// Seleciona todos os itens da lista não ordenada (ul) da navegação do menu hamburguer
let itensMenu = document.querySelectorAll(".nav-menu-hamburguer ul li");

// Adiciona um evento de clique para cada item da lista
itensMenu.forEach(function(item) {
  item.addEventListener("click", function() {
    // Chama a função abrirFecharMenu() para fechar o menu
    abrirFecharMenu();
  });
});


// FUNÇÃO BOTÃO VOLTAR PRO TOPO 
window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 450);
});
function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// FUNÇÃO PROJETOS OCULTOS 
function abrirFecharProjetos() {
  let projetosOcultos = document.querySelector(".projetos-ocultos");
  let iconeBotaoOutrosProjetos = document.querySelector(
    ".icone-botao-projetos"
  );

  // Verifica se a div que envolve os projetos está visível verificando se ela possui a classe "ativo"
  let projetosOcultosAtivo = projetosOcultos.classList.contains("ativo");

  // Se a div não estiver com a classe, adiciona a classe "ativo" para torná-lo visível
  if (!projetosOcultosAtivo) {
    projetosOcultos.classList.add("ativo");
    // Altera o src da imagem para a imagem de ocultar os projetos
    iconeBotaoOutrosProjetos.src = "img/x.png";
  } else {
    // Se estiver ativo, remove a classe "ativo" para ocultá-lo
    projetosOcultos.classList.remove("ativo");
    // Altera o src da imagem para a imagem de abrir os projetos
    iconeBotaoOutrosProjetos.src = "img/seta.png";
  }
}

// FUNÇÃO COPIAR ENDEREÇO GMAIL
function copiarTexto() {
  // Seleciona o texto a ser copiado
  var texto = document.getElementById("textoParaCopiar").value;

  // Tenta copiar o texto para a área de transferência
  navigator.clipboard
    .writeText(texto)
    .then(function () {
      // Alerta que o texto foi copiado
      alert("Endereço de e-mail copiado!");
    })
    .catch(function (err) {
      // Se ocorrer um erro, mostra uma mensagem de erro
      alert("Erro ao copiar o texto: " + err);
    });
}



