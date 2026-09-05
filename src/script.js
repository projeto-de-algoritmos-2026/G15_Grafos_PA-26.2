const TAMANHO_CELULA = 100;
const RECUO = 6; 

class Veiculo {
  constructor(id, tamanho, orientacao, x, y, cor) {
    this.id = id;
    this.tamanho = tamanho;   
    this.orientacao = orientacao;
    this.x = x;               
    this.y = y;                  
    this.cor = cor;             
  }

  get largura() {
    return this.orientacao === "H" ? this.tamanho * TAMANHO_CELULA : TAMANHO_CELULA;
  }

  get altura() {
    return this.orientacao === "V" ? this.tamanho * TAMANHO_CELULA : TAMANHO_CELULA;
  }

  criarElementoDOM() {
    const elemento = document.createElement("div");
    elemento.classList.add("veiculo");
    elemento.dataset.id = this.id; 
    elemento.style.width = `${this.largura - (RECUO * 2)}px`;
    elemento.style.height = `${this.altura - (RECUO * 2)}px`;
    elemento.style.left = `${(this.x * TAMANHO_CELULA) + RECUO}px`;
    elemento.style.top = `${(this.y * TAMANHO_CELULA) + RECUO}px`;
    elemento.style.backgroundColor = this.cor;

    return elemento;
  }
}

const veiculos = [
  new Veiculo("carro-principal", 2, "H", 1, 2, "#E50914"),
  new Veiculo("caminhao-azul", 3, "V", 0, 0, "#0088FF"),
  new Veiculo("carro-verde", 2, "V", 3, 1, "#2ECC71")
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
    const elementoVeiculo = veiculo.criarElementoDOM();
    containerVeiculos.appendChild(elementoVeiculo);
  });
}

gerarGrade();
renderizarVeiculos();