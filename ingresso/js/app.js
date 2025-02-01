

function comprar(){
    //capturar os valores do forms com o tipo do ingresso
    //capturar os valores do forms qtde.
    //verificar a quantidade de ingressos disponiveis conforme a opção escolhida
    //se houver disponibilidade substrair
    
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdSolicitada = document.getElementById('qtd').value;
    let qtdDisponivel = document.getElementById(`qtd-${tipoIngresso}`).textContent;

    if (qtdDisponivel >0 & qtdSolicitada >0){
        let qtdRestante = qtdDisponivel-qtdSolicitada;
        alert('Compra realizada com sucesso!')
        document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdRestante
    
    } else {
        alert(`Ingressos indisponíveis para ${tipoIngresso}`)
    }


}


