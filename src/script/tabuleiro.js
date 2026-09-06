import { TAMANHO_GRADE } from './config.js';
import { Veiculo } from './veiculo.js';

export const veiculos = [];

let estadoInicialFase = [];

export function salvarEstadoInicial() {
  estadoInicialFase = veiculos.map(v => new Veiculo(v.id, v.tamanho, v.orientacao, v.x, v.y, v.cor));
}

export function reiniciarParaEstadoInicial() {
  veiculos.length = 0;
  veiculos.push(...estadoInicialFase.map(v => new Veiculo(v.id, v.tamanho, v.orientacao, v.x, v.y, v.cor)));
}

export function atualizarVeiculos(novosVeiculos) {
  veiculos.length = 0;
  veiculos.push(...novosVeiculos);
  salvarEstadoInicial();
}

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
  if (!containerGrade) return;
  containerGrade.innerHTML = "";
  for (let i = 0; i < TAMANHO_GRADE * TAMANHO_GRADE; i++) {
    const celula = document.createElement("div");
    celula.classList.add("celula");
    containerGrade.appendChild(celula);
  }
}

export function renderizarVeiculos(onSelectCallback) {
  const containerVeiculos = document.querySelector(".container-veiculos");
  if (!containerVeiculos) return;
  containerVeiculos.innerHTML = "";
  veiculos.forEach(veiculo => {
    containerVeiculos.appendChild(veiculo.criarElementoDOM(onSelectCallback));
  });
}