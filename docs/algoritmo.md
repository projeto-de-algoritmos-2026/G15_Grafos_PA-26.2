# Algoritmo A* 

O algoritmo **A*** é o cérebro por trás do nosso projeto. Ele é responsável por calcular a rota mais rápida até a vitória e resolver o tabuleiro sozinho, garantindo sempre o menor número de movimentos possíveis.

---

## Como ele funciona na prática?

Diferente de um algoritmo de busca cega (como o BFS ou DFS) que testa movimentos sem estratégia, o A* calcula o custo de cada caminho antes de decidir qual peça mover. Ele foca no caminho mais promissor para tirar o carro vermelho da frente da saída.

---

## A Fórmula e a Heurística

Para tomar decisões, o A* avalia cada estado do tabuleiro usando a equação:

**f(n) = g(n) + h(n)**

* **g(n) [Passos dados]:** Quantos movimentos já fizemos do início até chegar no estado atual **n**.
* **h(n) [Estimativa / Heurística]:** O nosso palpite educado de quantos passos ainda faltam até a vitória.
* **f(n) [Custo total]:** A prioridade do nó. Quanto menor o valor de **f(n)**, mais rápido o algoritmo quer explorar aquele estado.

## A nossa Heurística na prática
Dentro da função `calcularH`, a gente mede a dificuldade de resolver o tabuleiro somando dois fatores:

1. **Distância até a saída:** Quantas casas faltam para o carro principal chegar na coluna de saída (**x = 4**).
2. **Carros bloqueando:** Quantos veículos estão na frente dele travando o caminho.

**Heurística h(n) = (4 - x_carro) + veículos no caminho**

---

## Onde usamos o A* no jogo?

* **Contador de Movimentos Perfeitos:** Roda no início de cada fase para avisar ao jogador qual é o menor número possível de passos para resolver aquele nível.
* **Filtro no Gerador de Fases:** Garante que o jogo não crie fases impossíveis e nem fáceis demais, filtrando apenas tabuleiros com solução entre 8 e 20 passos.
* **Botão "Resolver com A*":** Executa a solução passo a passo direto na tela quando o usuário pede ajuda.