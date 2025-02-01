let valorTotal = 0;

limpar()

function adicionar() {

    let tagProduts = document.getElementById('produto');
    let nomeProduto = tagProduts.value.split('-')[0];
    let valorProduto = tagProduts.value.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let tagListProdu = document.getElementById('lista-produtos').querySelector('section');
    let tagValorTotal = document.getElementById('valor-total');
    valorProduto = parseFloat(valorProduto)*parseInt(quantidade)
    valorTotal += parseFloat(valorProduto)*parseInt(quantidade);

    if (quantidade){
        tagListProdu.innerHTML += `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${'R$'+valorProduto}</span>
        </section>`;
        
        tagValorTotal.textContent = `${'R$'+valorTotal}`;
        document.getElementById('quantidade').value = 0;
    } else {
        alert('Insira a quantidade')
    }

}

function limpar(){
    let quantidade = document.getElementById('quantidade').value;
    let tagListProdu = document.getElementById('lista-produtos').querySelector('section');
    let tagValorTotal = document.getElementById('valor-total');

    quantidade = '';
    valorTotal = 0;
    tagListProdu.innerHTML = `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
        <span class="texto-azul"></span><span class="texto-azul"></span>
        </section>`;
    tagValorTotal.textContent = 0;
}

