import { gerarGrade, renderizarVeiculos, veiculos, celulaOcupada } from './tabuleiro.js';
import { selecionarVeiculo, inicializarControles } from './controles.js';
import { SolverAStar } from './solverAStar.js';

export function resolverAutomaticamente() {
  const solver = new SolverAStar(veiculos);
  const solucao = solver.resolver();

  if (!solucao) {
    alert("Esta fase não possui solução!");
    return;
  }

  console.log(`Mínimo de movimentos necessários: ${solucao.length}`);

  solucao.forEach((acao, index) => {
    setTimeout(() => {
      const veiculo = veiculos.find(v => v.id === acao.id);
      if (veiculo) {
        veiculo.mover(acao.passo, celulaOcupada);
      }
    }, index * 350); 
  });
}

gerarGrade();
renderizarVeiculos(selecionarVeiculo);
inicializarControles();

const btnResolver = document.getElementById("btn-resolver");
if (btnResolver) {
  btnResolver.addEventListener("click", resolverAutomaticamente);
}