import { TAMANHO_GRADE } from './config.js';

class NoAStar {
  constructor(estadoVeiculos, g = 0, h = 0, pai = null, acao = null) {
    this.estado = estadoVeiculos;
    this.g = g; 
    this.h = h; 
    this.f = g + h; 
    this.pai = pai;
    this.acao = acao; 
  }
}

export class SolverAStar {
  constructor(veiculosIniciais) {
    this.veiculosIniciais = veiculosIniciais;
  }

  serializarEstado(estado) {
    return estado
      .map(v => `${v.id}:${v.x},${v.y}`)
      .sort()
      .join('|');
  }

  calcularH(estado) {
    const carroRed = estado.find(v => v.id === "carro-principal");
    if (!carroRed) return 0;

    const distanciaSaida = 4 - carroRed.x;
    if (distanciaSaida <= 0) return 0;

    let bloqueios = 0;
    const linhaSaida = carroRed.y;
    const inicioChecagem = carroRed.x + carroRed.tamanho;

    for (let x = inicioChecagem; x < TAMANHO_GRADE; x++) {
      const estaOcupado = estado.some(v => {
        if (v.id === "carro-principal") return false;
        if (v.orientacao === "H") {
          return v.y === linhaSaida && x >= v.x && x < v.x + v.tamanho;
        } else {
          return x === v.x && linhaSaida >= v.y && linhaSaida < v.y + v.tamanho;
        }
      });
      if (estaOcupado) bloqueios++;
    }

    return distanciaSaida + bloqueios;
  }

  gerarSucessores(noAtual) {
    const sucessores = [];
    const estadoAtual = noAtual.estado;

    estadoAtual.forEach((v, index) => {
      [-1, 1].forEach(passo => {
        if (this.podeMover(estadoAtual, index, passo)) {
          const novoEstado = estadoAtual.map((veic, i) => {
            if (i !== index) return { ...veic };
            return {
              ...veic,
              x: veic.orientacao === "H" ? veic.x + passo : veic.x,
              y: veic.orientacao === "V" ? veic.y + passo : veic.y
            };
          });

          const h = this.calcularH(novoEstado);
          sucessores.push(new NoAStar(
            novoEstado,
            noAtual.g + 1,
            h,
            noAtual,
            { id: v.id, passo }
          ));
        }
      });
    });

    return sucessores;
  }

  podeMover(estado, indexVeiculo, passo) {
    const v = estado[indexVeiculo];
    const novoX = v.orientacao === "H" ? (passo > 0 ? v.x + v.tamanho : v.x - 1) : v.x;
    const novoY = v.orientacao === "V" ? (passo > 0 ? v.y + v.tamanho : v.y - 1) : v.y;

    if (novoX < 0 || novoX >= TAMANHO_GRADE || novoY < 0 || novoY >= TAMANHO_GRADE) {
      return false;
    }

    return !estado.some((outro, idx) => {
      if (idx === indexVeiculo) return false;
      if (outro.orientacao === "H") {
        return novoY === outro.y && novoX >= outro.x && novoX < outro.x + outro.tamanho;
      } else {
        return novoX === outro.x && novoY >= outro.y && novoY < outro.y + outro.tamanho;
      }
    });
  }

  resolver() {
    const estadoInicial = this.veiculosIniciais.map(v => ({
      id: v.id,
      tamanho: v.tamanho,
      orientacao: v.orientacao,
      x: v.x,
      y: v.y
    }));

    const noInicial = new NoAStar(estadoInicial, 0, this.calcularH(estadoInicial));
    const openSet = [noInicial];
    const closedSet = new Set();

    while (openSet.length > 0) {
      openSet.sort((a, b) => a.f - b.f);
      const noAtual = openSet.shift();

      const chaveEstado = this.serializarEstado(noAtual.estado);

      const carroRed = noAtual.estado.find(v => v.id === "carro-principal");
      if (carroRed && carroRed.x === 4) {
        return this.reconstruirCaminho(noAtual);
      }

      if (closedSet.has(chaveEstado)) continue;
      closedSet.add(chaveEstado);

      const sucessores = this.gerarSucessores(noAtual);
      for (const sucessor of sucessores) {
        const chaveSucessor = this.serializarEstado(sucessor.estado);
        if (!closedSet.has(chaveSucessor)) {
          openSet.push(sucessor);
        }
      }
    }

    return null; 
  }

  reconstruirCaminho(no) {
    const caminho = [];
    let atual = no;
    while (atual.pai) {
      caminho.unshift(atual.acao);
      atual = atual.pai;
    }
    return caminho;
  }
}