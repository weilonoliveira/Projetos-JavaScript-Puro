const botoes = document.querySelectorAll('.btn') // devolve um array com todos os botões
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) // pega o id do botão que chamou a função
    const categoria = elementoBtn.value
    elementoValorTotalLivrosDisponiveis.innerHTML = ""
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade(): filtrarPorCategoria(categoria)
    if(categoria == 'disponiveis' ) {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalDosLivrosDisponiveis(valorTotal)
    }
    exibirLivrosNaTela(livrosFiltrados)   
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveis(valor){
    elementoValorTotalLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>`
}