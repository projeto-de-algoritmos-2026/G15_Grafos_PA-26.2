const TAMANHO_CELULA = 100;
const RECUO = 6; 

const veiculos = [
  {
    id: "carro-principal",
    tamanho: 2,
    orientacao: "H",    
    x: 1,              
    y: 2,                
    cor: "#E50914"     
  },
  {
    id: "caminhao-azul",
    tamanho: 3,
    orientacao: "V",
    x: 0,
    y: 0,
    cor: "#0088FF"
  },
  {
    id: "carro-verde",
    tamanho: 2,
    orientacao: "V",
    x: 3,
    y: 1,
    cor: "#2ECC71"
  }
];

function gerarGrade() {
  const containerGrade = document.querySelector(".container-grade");
  containerGrade.innerHTML = "";

  for (let i = 0; i < 36; i++) {
    const celula = document.createElement("div");
    celula.classList.add("celula");
    containerGrade.appendChild(celula);
  }
}

function renderizarVeiculos() {
  const containerVeiculos = document.querySelector(".container-veiculos");
  containerVeiculos.innerHTML = "";

  veiculos.forEach(veiculo => {
    const elemento = document.createElement("div");
    elemento.classList.add("veiculo");

    const largura = veiculo.orientacao === "H" ? veiculo.tamanho * TAMANHO_CELULA : TAMANHO_CELULA;
    const altura = veiculo.orientacao === "V" ? veiculo.tamanho * TAMANHO_CELULA : TAMANHO_CELULA;

    elemento.style.width = `${largura - (RECUO * 2)}px`;
    elemento.style.height = `${altura - (RECUO * 2)}px`;
    elemento.style.left = `${(veiculo.x * TAMANHO_CELULA) + RECUO}px`;
    elemento.style.top = `${(veiculo.y * TAMANHO_CELULA) + RECUO}px`;
    elemento.style.backgroundColor = veiculo.cor;

    containerVeiculos.appendChild(elemento);
  });
}

gerarGrade();
renderizarVeiculos();