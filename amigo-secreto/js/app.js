let listaAmigos = [];
let nomeAmigos = '';
let listaAmigosSorteada = [];
let elementoListaSorteio = document.getElementById('lista-sorteio');

function adicionar () {
    // capturar o nome inserido no form
    // adicionar em uma lista cada nome se não for duplicado
    // apresentar os nomes adicionados na tela

    let nomeAmigo = document.getElementById('nome-amigo').value.toUpperCase();
    if(listaAmigos.includes(nomeAmigo)){
        alert(`O nome "${nomeAmigo}" já existe, inclua um nome diferente`)
        document.getElementById('nome-amigo').value = ''
        return;
    }
    
    if (nomeAmigo == ''){
        alert('O campo está vazio, favor insira o nome de um amigo.')
        return;
    }
    listaAmigos.push(nomeAmigo);
    document.getElementById('nome-amigo').value = '';
    let listaAmigosString = listaAmigos;
    listaAmigosString = listaAmigosString.toString();
    document.getElementById('lista-amigos').textContent = listaAmigosString.replaceAll(',', ', ');
}

function sortear() {

    // verifica se a quantidade de participantes é um numero par e maior ou igual a 4
    // apresenta uma nova lista embaralhada a partir da original
    elementoListaSorteio.innerHTML = '<p id="lista-sorteio"></p>';

    if (listaAmigos.length <4) {
        alert('Inclua pelo menos 4 participantes');
        return;
    };

    if (listaAmigos.length % 2 == 1 & listaAmigos.length >=4){
        alert('Inclua mais um participante');
        return;
    };
    // embaralha a lista de amigos
    if (listaAmigos.length % 2 == 0 & listaAmigos.length >=4 ){
        listaAmigosSorteada = [];
        for(let i = 0; i < listaAmigos.length; i++){

            let randomIndex = Math.floor(Math.random() * listaAmigos.length);

            while(listaAmigosSorteada.includes(listaAmigos[randomIndex])){ // para não inserir valores repetidos na lista
                randomIndex = Math.floor(Math.random() * listaAmigos.length)};

            listaAmigosSorteada.push(listaAmigos[randomIndex]);
        }
    }

    // apresenta na tela quem tirou quem

    for(let i = 0; i <= listaAmigosSorteada.length - 1; i++) {
        if (i == listaAmigosSorteada.length - 1){
            elementoListaSorteio.innerHTML += `<p id="lista-sorteio">${listaAmigosSorteada[i]} -> ${listaAmigosSorteada[0]} </p>`;    
        } else {
            elementoListaSorteio.innerHTML += `<p id="lista-sorteio">${listaAmigosSorteada[i]} -> ${listaAmigosSorteada[i+1]} </p>`;
        }
    }
}

function reiniciar() {
    listaAmigos = [];
    nomeAmigos = '';
    listaAmigosSorteada = [];
    elementoListaSorteio.innerHTML = '<p id="lista-sorteio"></p>';
    document.getElementById('lista-amigos').textContent = ''
}

// function elementosRepetidosEntreArrays(lista1,listaParaComparar){
//     let qtdElementosIguais = []
//     for(let i = 0; i <= listaParaComparar.length - 1; i++){
//         if(lista1.includes(listaParaComparar[i])){
//             qtdElementosIguais.push(listaParaComparar[i])
//         }
        
//     }
//     return qtdElementosIguais
// }
