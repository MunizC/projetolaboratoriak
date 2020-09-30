let nome = prompt("Bem vindo ao teste, por favor, nos diga seu nome")
let iniciarProva = confirm('Você deseja inicar a prova ' + nome + ' ?')

if (iniciarProva) {
        
     const respostaPergunta1 = 1   
     const respostaPergunta2 = 2
     const respostaPergunta3 = 3

     let pergunta1= prompt("Quanto é 2 + 2? \n 1) 4 \n 2) 7 \n 3) 10")
     let pergunta2= prompt("Quanto é 5 + 3? \n 1) 7 \n 2) 8 \n 3) 2")
     let pergunta3= prompt("Quanto é 4 + 5 ? \n 1) 18 \n 2) 20 \n 3) 9")



     if(pergunta1 == respostaPergunta1) {
       let resposta1 =  document.getElementById ('respostas_correta1')
       resposta1.innerHTML=('4')
    

    }else {
        let respostaErrada1 =  document.getElementById ('respostas_erradas1')
        respostaErrada1.innerHTML=('1')
    
    }


    if(pergunta2 == respostaPergunta2) {
        let resposta2 =  document.getElementById ('respostas_correta2')
        resposta2.innerHTML=('8')

        
    }else {
        let respostaErrada2 =  document.getElementById ('respostas_erradas1')
        respostaErrada2.innerHTML=('2')

   
    if(pergunta3 == respostaPergunta3) {
        let resposta3 =  document.getElementById ('respostas_correta3')
       resposta3.innerHTML=('9')

    }else {

        let respostaErrada3 =  document.getElementById ('respostas_erradas3')
        respostaErrada3.innerHTML=('3')

    
    }
    
    }
}


