# Projeto de Algoritmos - Grupo 15

Repositório do primeiro trabalho da disciplina Projeto de Algoritmos (PA), ministrada pelo professor Maurício Serrano, na Universidade de Brasília (UnB).

## Sobre o Projeto

O projeto consiste no desenvolvimento de um solucionador do jogo Rush Hour, utilizando um tabuleiro 6 × 6. O objetivo é movimentar os veículos que bloqueiam o caminho do carro principal até que ele consiga alcançar a saída do tabuleiro. A aplicação permite jogar manualmente e também possui um Auto-Solver, que utiliza o algoritmo de busca heurística A* para encontrar uma solução automaticamente.

## Protótipo Inicial (Figma)

![Prototipo 1](./img/figma_prototipo_1.jpeg)

## Como funciona a dinâmica do jogo:

Cada veículo pode se movimentar de acordo com sua orientação:

Veículos horizontais podem se mover para a esquerda e direita;
veículos verticais podem se mover para cima e baixo.

Os veículos não podem ultrapassar os limites do tabuleiro nem ocupar uma célula já ocupada por outro veículo.

Cada configuração do tabuleiro representa um estado do jogo. A partir desses estados, o algoritmo A* explora os movimentos possíveis até encontrar uma solução.

Quando uma solução é encontrada, os movimentos podem ser apresentados de forma animada, permitindo acompanhar a resolução do desafio.

## Tecnologias

* **HTML**
* **CSS**
* **JavaScript**
* **Git**
* **GitHub**
* **MkDocs**


## Estrutura

```text
G15_Grafos_PA-26.2/
├── .github/
│   └── workflows/
├── docs/
│   ├── img/
│   │   └── rush-hour.png
│   └── index.md
├── src/
│   ├── index.css
│   ├── index.html
│   └── script.js
├── mkdocs.yml
└── README.md
```

## Documentação

A documentação completa do projeto está disponível no GitHub Pages.

Nela são apresentados detalhes sobre o desenvolvimento da aplicação, a representação dos estados, a geração de movimentos, a heurística e a implementação do algoritmo A*.



## Equipe

<table align="center">
  <tr>
    <td align="center" width="220px">
      <a href="https://github.com/GUGOFO">
        <img src="https://github.com/GUGOFO.png" width="130px" height="130px" style="border-radius: 50%; object-fit: cover; border: 3px solid #2da44e;" alt="Gustavo Gomes Fornaciari"><br><br>
        <b>Gustavo Gomes Fornaciari</b>
      </a><br>
      <sub style="font-size: 12px; color: #57606a;">Matrícula: 241032519</sub><br><br>
      <a href="https://github.com/GUGOFO">
        <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub">
      </a>
    </td>
    <td align="center" width="220px">
      <a href="https://github.com/AnnaBeatrizAraujo">
        <img src="https://github.com/AnnaBeatrizAraujo.png" width="130px" height="130px" style="border-radius: 50%; object-fit: cover; border: 3px solid #2da44e;" alt="Ana Beatriz Souza Araujo"><br><br>
        <b>Ana Beatriz Souza Araujo</b>
      </a><br>
      <sub style="font-size: 12px; color: #57606a;">Matrícula: 241025891</sub><br><br>
      <a href="https://github.com/AnnaBeatrizAraujo">
        <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub">
      </a>
    </td>
  </tr>
</table>