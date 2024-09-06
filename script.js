const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu tipo de jogo preferido?",
        alternativas: [
            {
                texto: "Jogos de ação e aventura.",
                afirmacao: "Se você prefere jogos de ação e aventura, você gosta de experiências dinâmicas e intensas."
            },
            {
                texto: "Jogos de estratégia e RPG.",
                afirmacao: "Se você prefere jogos de estratégia e RPG, você valoriza a profundidade e a complexidade do jogo."
            }

        ]
    },
    {
        enunciado: "Você prefere jogar sozinho ou em equipe?",
        alternativas: [
            {
                texto: "Jogar sozinho.",
                afirmacao: "Se você prefere jogar sozinho, você aprecia a imersão e o controle total sobre a experiência de jogo."
            },
            {
                texto: "Jogar em equipe.",
                afirmacao: "Se você prefere jogar em equipe, você valoriza a colaboração e a interação social durante o jogo."
            }

        ]
    },
    {
        enunciado: "Você gosta mais de gráficos realistas ou estilizados?",
        alternativas: [
            {
                texto: "Jogos realistas.",
                afirmacao: "Se você gosta de gráficos realistas, você prefere uma representação visual detalhada e autêntica."
            },
            {
                texto: "Jogos estilizados.",
                afirmacao: "Se você gosta de gráficos estilizados, você aprecia uma estética única e artística no jogo."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent
    mostraAlternativas();

}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
