import { Veiculo } from './veiculo.js';
import { SolverAStar } from './solverAStar.js';
import { TAMANHO_GRADE } from './config.js';

const PALETA_CORES = [
  "#0088FF", "#2ECC71", "#F1C40F", "#9B59B6", 
  "#E67E22", "#1ABC9C", "#E84393", "#00CEC9"
];

const MIN_PASSOS = 8;
const MAX_PASSOS = 20;

function celulaOcupadaNaLista(x, y, lista) {
  return lista.some(v => {
    if (v.orientacao === "H") {
      return y === v.y && x >= v.x && x < v.x + v.tamanho;
    } else {
      return x === v.x && y >= v.y && y < v.y + v.tamanho;
    }
  });
}

function podePosicionar(novoVeiculo, lista) {
  for (let i = 0; i < novoVeiculo.tamanho; i++) {
    const checkX = novoVeiculo.orientacao === "H" ? novoVeiculo.x + i : novoVeiculo.x;
    const checkY = novoVeiculo.orientacao === "V" ? novoVeiculo.y + i : novoVeiculo.y;
    if (celulaOcupadaNaLista(checkX, checkY, lista)) return false;
  }
  return true;
}

export function gerarFaseSolvavel() {
  let tentativas = 0;

  while (tentativas < 500) {
    tentativas++;
    const listaCandidata = [];

    const carroRed = new Veiculo("carro-principal", 2, "H", 0, 2, "#E50914");
    listaCandidata.push(carroRed);

    const quantidadeVeiculos = 6 + Math.floor(Math.random() * 3);

    for (let i = 0; i < quantidadeVeiculos; i++) {
      const tamanho = Math.random() > 0.65 ? 3 : 2;
      const orientacao = Math.random() > 0.5 ? "H" : "V";
      const cor = PALETA_CORES[i % PALETA_CORES.length];
      const id = `veiculo-aleatorio-${i + 1}`;

      const limiteX = orientacao === "H" ? TAMANHO_GRADE - tamanho : TAMANHO_GRADE - 1;
      const limiteY = orientacao === "V" ? TAMANHO_GRADE - tamanho : TAMANHO_GRADE - 1;

      let posicionado = false;
      let tentativasPosicao = 0;

      while (!posicionado && tentativasPosicao < 25) {
        tentativasPosicao++;
        const x = Math.floor(Math.random() * (limiteX + 1));
        const y = Math.floor(Math.random() * (limiteY + 1));

        const candidato = new Veiculo(id, tamanho, orientacao, x, y, cor);

        if (podePosicionar(candidato, listaCandidata)) {
          listaCandidata.push(candidato);
          posicionado = true;
        }
      }
    }

    const solver = new SolverAStar(listaCandidata);
    const solucao = solver.resolver();

    if (solucao && solucao.length >= MIN_PASSOS && solucao.length <= MAX_PASSOS) {
      return listaCandidata;
    }
  }

  return [
    new Veiculo("carro-principal", 2, "H", 0, 2, "#E50914"),
    new Veiculo("carro-amarelo", 2, "V", 2, 1, "#F1C40F"),
    new Veiculo("caminhao-azul", 3, "V", 3, 0, "#0088FF"),
    new Veiculo("carro-verde", 2, "H", 2, 3, "#2ECC71")
  ];
}