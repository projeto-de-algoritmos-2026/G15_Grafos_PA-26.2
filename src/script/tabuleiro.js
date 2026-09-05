import { TAMANHO_GRADE } from './config.js';
import { Veiculo } from './veiculo.js';

export const veiculos = [
  new Veiculo("carro-principal", 2, "H", 1, 2, "#E50914"),
  new Veiculo("caminhao-azul", 3, "V", 0, 0, "#0088FF"),
  new Veiculo("carro-verde", 2, "V", 3, 1, "#2ECC71"),
  new Veiculo("carro-amarelo", 2, "H", 2, 4, "#F1C40F")
];

export function celulaOcupada(x, y, idIgnorado = null) {
  if (x < 0 || x >= TAMANHO_GRADE || y < 0 || y >= TAMANHO_GRADE) return true;

  return veiculos.some(v => {
    if (v.id === idIgnorado) return false;

    if (v.orientacao === "H") {
      return y === v.y && x >= v.x && x < v.x + v.tamanho;
    } else {
      return x === v.x && y >= v.y && y < v.y + v.tamanho;
    }
  });
}

export function gerarGrade() {
  const containerGrade = document.querySelector(".container-grade");
  containerGrade.innerHTML = "";
  for (let i = 0; i < TAMANHO_GRADE * TAMANHO_GRADE; i++) {
    const celula = document.createElement("div");
    celula.classList.add("celula");
    containerGrade.appendChild(celula);
  }
}

export function renderizarVeiculos(onSelectCallback) {
  const containerVeiculos = document.querySelector(".container-veiculos");
  containerVeiculos.innerHTML = "";
  veiculos.forEach(veiculo => {
    containerVeiculos.appendChild(veiculo.criarElementoDOM(onSelectCallback));
  });
}