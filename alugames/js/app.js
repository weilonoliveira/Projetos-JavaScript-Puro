function alterarStatus(id) {
    let game = `game-${id}`;

    // quando clicar, verificar se o jogo está disponivel e mudar o para devolver e alterar a classe do css
    
    let botaoGame = document.getElementById(game).querySelector('a'); // tag "a" do game selecionado
    let imgGame = document.getElementById(game).querySelector('div') 
    let gameAlugado = botaoGame.classList.contains('dashboard__item__button--return') 
    let nomeGame = document.getElementById(game).querySelector('p').textContent
        

    if(gameAlugado == true) {

        confirm(`Você tem certeza que deseja devolver o jogo: ${nomeGame}`)
        imgGame.classList.remove('dashboard__item__img--rented');
        botaoGame.classList.remove("dashboard__item__button--return");
        // botaoGame.innerHTML = 'Alugar';
        botaoGame.textContent = 'Alugar';
        

    } else {

        imgGame.classList.add('dashboard__item__img--rented');
        botaoGame.classList.add("dashboard__item__button--return");
        botaoGame.textContent = 'Devolver'

    }


}