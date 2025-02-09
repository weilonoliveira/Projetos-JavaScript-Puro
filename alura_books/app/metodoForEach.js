const elementoParaInserirLivros = document.getElementById("livros")
const elementoValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = ""
    // elementoValorTotalLivrosDisponiveis.innerHTML = calcularValorTotalLivrosDisponiveis(listaDeLivros)
    listaDeLivros.forEach(livro => { // Para cada elemento retorna a tag abaixo
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'indisponivel'
        elementoParaInserirLivros.innerHTML +=`<div class="livro">
      <img class= ${disponibilidade} src=${livro.imagem} alt=${livro.alt} />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco"> R$${parseFloat(livro.preco).toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    })
}
