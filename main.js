const caixaPrincipal =  document.querySelector(".caixa-principal");
 const caixaPerguntas =  document.querySelector(".caixa-perguntas"); 
 const caixaAlternativas =  document.querySelector(".caixa-alternativas");
 const caixaResultado =  document.querySelector(".caixa-resultado");
 const textoResultado =  document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado: "O tráfico de animais é uma pratica ilegal que consiste em retirar os animais de seu habitat natural e vende-los clandestinamente. As aves são o principal alvo do tráfico de animais silvestres no Brasil. Você tem ou conhece alguém que tenha um animal silvestre ?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Não deixe esse criminoso sair em pune DENUNCIE!!"
            },
            {
                 
            texto: "Não",
            afirmacao: "Bom saber"
             }
        ]
    },
    {
        enunciado: "Se você presenciasee alguém da sua família cometendo esse crime, o que você faria ?",
        alternativas: [
            {
                texto: "Denunciaria a pessoa",
                afirmacao: "Um bom senso em parte desse acontecimento"
            },
            {
                 
            texto: "Acobertaria o crime",
            afirmacao: "Seria cumplice e sofreria com as consequências desse ato"
            }
        ]
    },
    {
        enunciado: "Cometendo esse ato infracionário (crime) você teria uma penalização de:",
        alternativas: [
            {
                texto: "Serviço comunitário por 1 ano + multa",
                afirmacao: "você errou"
            },
            {
                 
            texto: "Detenção de 6 meses a 1 ano + multa",
            afirmacão:"Parabéns você acertou"
            }
        ]
    },
    {
        enunciado: "Tendo em visto que você ficaria praticamente 1 ano preso por esse crime, valeria a pena mesmo ?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "você realmente tem coragem"
            },
            {
                 
            texto: "Não",
            afirmacao: "Você pensa como todo mundo"
            }
        ]
    },
 ];
 
 
 let atual = 0 ;
 let perguntaAtual;
 let historiaFinal = "";
 
 
 function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado()
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
 }
 
 function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",  () => respostaSelecionada (alternativa))
    caixaAlternativas.appendChild(botaoAlternativas);
 }
 }
 
 function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta ();
 }

 function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }
 
 mostraPergunta ();
 

