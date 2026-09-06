import { 
  gerarGrade, 
  renderizarVeiculos, 
  veiculos, 
  celulaOcupada, 
  atualizarVeiculos, 
  reiniciarParaEstadoInicial 
} from './tabuleiro.js';
import { selecionarVeiculo, inicializarControles } from './controles.js';
import { SolverAStar } from './solverAStar.js';
import { gerarFaseSolvavel } from './geradorFases.js';

let movimentosJogador = 0;
let minimoPassosAStar = 0;

function atualizarHUD() {
  const el = document.getElementById("contador-movimentos");
  if (el) el.textContent = movimentosJogador;
}

function calcularMinimoPassos() {
  const solver = new SolverAStar(veiculos);
  const solucao = solver.resolver();
  minimoPassosAStar = solucao ? solucao.length : 0;
}

function registrarMovimento() {
  movimentosJogador++;
  atualizarHUD();
}

function exibirTelaVitoria() {
  const eficiencia = movimentosJogador > 0 
    ? Math.round((minimoPassosAStar / movimentosJogador) * 100) 
    : 100;

  document.getElementById("stat-player").textContent = movimentosJogador;
  document.getElementById("stat-minimo").textContent = minimoPassosAStar;
  document.getElementById("stat-eficiencia").textContent = `${eficiencia}%`;

  document.getElementById("modal-vitoria").classList.remove("oculto");
}

function fecharModalVitoria() {
  document.getElementById("modal-vitoria").classList.add("oculto");
}

export function reiniciarFase() {
  movimentosJogador = 0;
  atualizarHUD();
  fecharModalVitoria();
  reiniciarParaEstadoInicial();
  renderizarVeiculos(selecionarVeiculo);
  calcularMinimoPassos();
}

export function carregarNovaFase() {
  movimentosJogador = 0;
  atualizarHUD();
  fecharModalVitoria();
  const novosVeiculos = gerarFaseSolvavel();
  atualizarVeiculos(novosVeiculos);
  renderizarVeiculos(selecionarVeiculo);
  calcularMinimoPassos();
}

export function resolverAutomaticamente() {
  const solver = new SolverAStar(veiculos);
  const solucao = solver.resolver();

  if (!solucao) {
    alert("Esta fase não possui solução!");
    return;
  }

  solucao.forEach((acao, index) => {
    setTimeout(() => {
      const veiculo = veiculos.find(v => v.id === acao.id);
      if (veiculo) {
        veiculo.mover(
          acao.passo, 
          celulaOcupada, 
          registrarMovimento, 
          exibirTelaVitoria
        );
      }
    }, index * 350);
  });
}

gerarGrade();
carregarNovaFase();
inicializarControles(registrarMovimento, exibirTelaVitoria);

document.getElementById("btn-nova-fase").addEventListener("click", carregarNovaFase);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciarFase);
document.getElementById("btn-resolver").addEventListener("click", resolverAutomaticamente);

document.getElementById("modal-btn-reiniciar").addEventListener("click", reiniciarFase);
document.getElementById("modal-btn-proxima").addEventListener("click", carregarNovaFase);