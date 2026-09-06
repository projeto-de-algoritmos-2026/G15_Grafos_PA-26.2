# Rush Hour

Jogo Rush Hour interativo desenvolvido em HTML, CSS e JavaScript, contando com geração automática de fases de dificuldade média e resolução com o algoritmo de busca A*.

![Jogo finalizado](./img/jogo.png)

## Funcionalidades

* **Geração Procedural:** Cria cenários aleatórios garantindo uma solução ótima entre **8 e 20 movimentos**.
* **Solucionador A#:** Algoritmo de A* que calcula o menor caminho para a vitória e resolve o tabuleiro de forma automatizada.
* **Restart de Fase:** Com o apertar de um botao a fase recomeça para voce tentar mais uma vez
* **Contador de Movimentos:** Ao concluir um nivel voce vera quantos passos deu a mais doque o necessario.

## Estrutura de Arquivos

```text
src/
├── index.html          # Estrutura e modal de vitória
├── index.css           # Estilização da grade, veículos e modal
└── script/
    ├── config.js       # Constantes globais 
    ├── controles.js    # Eventos de clique e navegação por teclado
    ├── geradorFases.js # Algoritmo de geração e validação de dificuldade
    ├── main.js         # Loop principal e gerenciamento de estado
    ├── solverAStar.js  # Grafo e algoritmo de busca A*
    ├── tabuleiro.js    # Gerenciamento da grade e estado dos veículos
    └── veiculo.js      # Classe de modelo do veículo e movimentação
```

## Como Executar o Projeto

1. Instale a extensão **Live Server** do Vscode.
2. Clique com o botão direito no arquivo `src/index.html`.
3. Selecione **Open with Live Server**.

Ou use **python3 -m http.server 8000** para abir um servidor

## Como jogar

1. Clique em qualquer veículo para selecioná-lo.
2. Use as setas do teclado (←→↑↓) para deslizar o veículo selecionado.
3. Leve o carro vermelho (principal) até a abertura do lado direito do tabuleiro para vencer a fase.

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