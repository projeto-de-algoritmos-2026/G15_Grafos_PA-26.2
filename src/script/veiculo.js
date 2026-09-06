import { TAMANHO_CELULA, RECUO } from './config.js';

export class Veiculo {
  constructor(id, tamanho, orientacao, x, y, cor) {
    this.id = id;
    this.tamanho = tamanho;
    this.orientacao = orientacao;
    this.x = x;
    this.y = y;
    this.cor = cor;
    this.elemento = null;
  }

  get largura() {
    return this.orientacao === "H" ? this.tamanho * TAMANHO_CELULA : TAMANHO_CELULA;
  }

  get altura() {
    return this.orientacao === "V" ? this.tamanho * TAMANHO_CELULA : TAMANHO_CELULA;
  }

  podeMover(passos, celulaOcupadaFn) {
    if (this.orientacao === "H") {
      const novoX = passos > 0 ? this.x + this.tamanho : this.x - 1;
      return !celulaOcupadaFn(novoX, this.y, this.id);
    } else {
      const novoY = passos > 0 ? this.y + this.tamanho : this.y - 1;
      return !celulaOcupadaFn(this.x, novoY, this.id);
    }
  }

  mover(passos, celulaOcupadaFn, onMoveCallback, onVitoriaCallback) {
    if (!this.podeMover(passos, celulaOcupadaFn)) return false;

    if (this.orientacao === "H") {
      this.x += passos;
    } else {
      this.y += passos;
    }

    this.atualizarPosicaoDOM();

    if (onMoveCallback) onMoveCallback();

    if (this.id === "carro-principal" && this.x === 4) {
      if (onVitoriaCallback) {
        setTimeout(() => onVitoriaCallback(), 200);
      }
    }

    return true;
  }

  atualizarPosicaoDOM() {
    if (!this.elemento) return;
    this.elemento.style.left = `${(this.x * TAMANHO_CELULA) + RECUO}px`;
    this.elemento.style.top = `${(this.y * TAMANHO_CELULA) + RECUO}px`;
  }

  criarElementoDOM(onSelectCallback) {
    const elemento = document.createElement("div");
    elemento.classList.add("veiculo");
    elemento.dataset.id = this.id;

    elemento.style.width = `${this.largura - (RECUO * 2)}px`;
    elemento.style.height = `${this.altura - (RECUO * 2)}px`;
    elemento.style.backgroundColor = this.cor;
    
    this.elemento = elemento;
    this.atualizarPosicaoDOM();

    elemento.addEventListener("click", (e) => {
      e.stopPropagation();
      onSelectCallback(this);
    });

    return elemento;
  }
}