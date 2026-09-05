import { gerarGrade, renderizarVeiculos } from './tabuleiro.js';
import { selecionarVeiculo, inicializarControles } from './controles.js';

gerarGrade();
renderizarVeiculos(selecionarVeiculo);
inicializarControles();