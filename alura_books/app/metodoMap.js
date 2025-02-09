function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // faz uma cópia do objeto e altera o valor de preço
    })

    return livrosComDesconto
}