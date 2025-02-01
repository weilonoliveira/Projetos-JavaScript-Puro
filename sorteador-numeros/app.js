let sorteados;


function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    sorteados = [];
    let numero;
    console.log(quantidade, de, ate)


    if (quantidade <= ate & (ate - de) >= quantidade) {

        for (let i = 0; i < quantidade; i ++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            };

            sorteados.push(numero);

        }

        mostrarResultado(sorteados);

        alterarStatusBotao();
    } else {
        mostrarResultado('Favor preencher os campos corretamente');
    }
}

function mostrarResultado(mensagem){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">${mensagem}</label>`;
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let btn_reiniciar = document.getElementById('btn-reiniciar');
    if (btn_reiniciar.classList.contains("container__botao-desabilitado")) {
        btn_reiniciar.classList.remove("container__botao-desabilitado");
        btn_reiniciar.classList.add("container__botao");
    } else {
        btn_reiniciar.classList.remove("container__botao");
        btn_reiniciar.classList.add("container__botao-desabilitado");
    }
     
}

function reiniciar() {
    let btn_quantidade = document.getElementById('quantidade');
    let btn_de = document.getElementById('de');
    let btn_ate = document.getElementById('ate');
    btn_de.value = '';
    btn_quantidade.value = '';
    btn_ate.value = '';
    mostrarResultado("Números sorteados:  nenhum até agora")
    alterarStatusBotao()

    
}