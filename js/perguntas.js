
export const perguntas = [
    {
        enunciado: "O que você acha das bets?",
        alternativas: [
            {
                texto: "É assustadora.",
                afirmacao: ["Você ficou preocupado."],
                proxima: 1,
            },
            {
                texto: "É legal.",
                afirmacao: ["Você gosta disso."],
                proxima: 1,
            },
        ]
    },

    {
        enunciado: "As bets trazem algum beneifcio?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: ["Hmm..."],
                proxima: 2,
            },
            {
                texto: "SIm, elas fazem você ganhar dinheiro.",
                afirmacao: ["dinheiro é sempre bom."],
                proxima: 2,
            },
        ]
    },

    {
        enunciado: "Como jogar nas bets?",
        alternativas: [
            {
                texto: "Com responsabilidade.",
                afirmacao: ["É importante usar as bets com cuidado."],
            },
            {
                texto: "Depositar todo dinheiro em conta e testar a sorte.",
                afirmacao: ["testar a sorte..."],
            },
        ]
    }
];

