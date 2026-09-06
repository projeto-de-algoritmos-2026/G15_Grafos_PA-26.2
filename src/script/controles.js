import { celulaOcupada } from './tabuleiro.js';

let veiculoSelecionado = null;

export function selecionarVeiculo(veiculo) {
  document.querySelectorAll(".veiculo").forEach(el => el.classList.remove("selecionado"));

  if (veiculoSelecionado === veiculo) {
    veiculoSelecionado = null;
    return;
  }

  veiculoSelecionado = veiculo;
  veiculo.elemento.classList.add("selecionado");
}

export function inicializarControles(onMoveCallback, onVitoriaCallback) {
  document.addEventListener("click", () => {
    document.querySelectorAll(".veiculo").forEach(el => el.classList.remove("selecionado"));
    veiculoSelecionado = null;
  });

  document.addEventListener("keydown", (e) => {
    if (!veiculoSelecionado) return;

    if (veiculoSelecionado.orientacao === "H") {
      if (e.key === "ArrowLeft") veiculoSelecionado.mover(-1, celulaOcupada, onMoveCallback, onVitoriaCallback);
      if (e.key === "ArrowRight") veiculoSelecionado.mover(1, celulaOcupada, onMoveCallback, onVitoriaCallback);
    } else if (veiculoSelecionado.orientacao === "V") {
      if (e.key === "ArrowUp") veiculoSelecionado.mover(-1, celulaOcupada, onMoveCallback, onVitoriaCallback);
      if (e.key === "ArrowDown") veiculoSelecionado.mover(1, celulaOcupada, onMoveCallback, onVitoriaCallback);
    }
  });
}