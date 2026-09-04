# Projeto de Algoritmos - Grupo 15

Repositório dedicado ao primeiro trabalho da disciplina de Projeto de Algoritmos (PA), ministrada pelo professor Maurício Serrano na UnB.

## Sobre o Projeto

A ideia do projeto é um visualizador/jogo em grid onde o usuário consegue desenhar caminhos e labirintos de forma livre na tela, definindo um ponto inicial e um ponto final. Ao acionar a busca, a aplicação executa o algoritmo para encontrar e destacar a menor rota entre a origem e o destino.

## Protótipo Inicial (Figma)

![Prototipo 1](./docs/img/figma_prototipo_1.png)

## Como funciona a dinâmica do jogo:

1. **Grid em branco:** O usuário inicia com uma malha vazia para montar o cenário.
2. **Construção do mapa:** É possível desenhar as paredes/caminhos (em cinza), além de definir a posição de **Início** (quadrado verde) e **Fim** (quadrado vermelho).
3. **Execução e Resolução:** 
   * A aplicação processa a estrutura do labirinto e calcula o caminho mais curto.
   * O menor caminho encontrado é renderizado em destaque (em azul).
   * A visualização também mostra a ordem/índices dos passos percorridos ao longo do grafo gerado no grid.

## Equipe

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/GUGOFO">
        <img src="https://github.com/GUGOFO.png" width="150px" alt="Gustavo Gomes Fornaciari" style="border-radius: 10px;"><br>
        <sub><b>Gustavo Gomes Fornaciari</b></sub><br>
        <sub>241032519</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/AnnaBeatrizAraujo">
        <img src="https://github.com/AnnaBeatrizAraujo.png" width="150px" alt="Ana Beatriz Souza Araujo" style="border-radius: 10px;"><br>
        <sub><b>Ana Beatriz Souza Araujo</b></sub><br>
        <sub>241025891</sub>
      </a>
    </td>
  </tr>
</table>