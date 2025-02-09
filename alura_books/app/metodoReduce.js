function calcularValorTotalLivrosDisponiveis(livrosFiltrados){
    return livrosFiltrados.reduce((acc, atual) => acc + parseFloat(atual.preco), 0).toFixed(2)
}