
let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte").addEventListener("click", () => {

    tamanhoFonte -= 2;

    if (tamanhoFonte < 12) {
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("altoContraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

/* =========================
   CURIOSIDADES
========================= */

const curiosidades = [
    "Uma nascente é o local onde a água brota naturalmente do solo.",
    "As árvores ajudam a proteger rios e nascentes.",
    "A água doce representa apenas uma pequena parte da água do planeta.",
    "Preservar rios ajuda a agricultura e a vida das pessoas.",
    "A poluição da água afeta animais, plantas e seres humanos."
];

document.getElementById("botaoCuriosidade")
.addEventListener("click", () => {

    const indice = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML =
        curiosidades[indice];
});

/* =========================
   QUIZ
========================= */

const perguntas = [

    {
        pergunta: "O que ajuda a preservar uma nascente?",
        opcoes: [
            "Jogar lixo",
            "Plantar árvores",
            "Poluir rios"
        ],
        correta: 1
    },

    {
        pergunta: "Qual atitude ajuda o meio ambiente?",
        opcoes: [
            "Evitar queimadas",
            "Desmatar",
            "Poluir"
        ],
        correta: 0
    },

    {
        pergunta: "Por que devemos economizar água?",
        opcoes: [
            "Porque é um recurso importante",
            "Porque não faz diferença",
            "Para desperdiçar depois"
        ],
        correta: 0
    }

];

let perguntaAtual = 0;
let pontos = 0;

const perguntaElemento =
document.getElementById("pergunta");

const opcoesElemento =
document.getElementById("opcoes");

const resultado =
document.getElementById("resultado");

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent =
        pergunta.pergunta;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao =
        document.createElement("button");

        botao.textContent = opcao;

        botao.onclick = () =>
        verificarResposta(indice);

        opcoesElemento.appendChild(botao);

    });

}

function verificarResposta(indice) {

    if (indice === perguntas[perguntaAtual].correta) {

        resultado.innerHTML =
        "✅ Resposta correta!";

        pontos++;

    } else {

        resultado.innerHTML =
        "❌ Resposta incorreta.";
    }

}

document.getElementById("proximaPergunta")
.addEventListener("click", () => {

    perguntaAtual++;

    resultado.innerHTML = "";

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        document.getElementById("quiz").innerHTML = `
            <h3>Quiz Finalizado!</h3>
            <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>
            <p>Parabéns por aprender mais sobre a preservação da natureza! 🌱</p>
        `;
    }

});

mostrarPergunta();
