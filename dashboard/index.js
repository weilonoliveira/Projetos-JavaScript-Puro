const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

const despesas = 1300
const receitas = 3000
let saldo = receitas-despesas

document.getElementById('card-despesas').querySelector('p').innerHTML = `<p>${despesas}</p>`
document.getElementById('card-receitas').querySelector('p').innerHTML = `<p>${receitas}</p>`
document.getElementById('card-saldo').querySelector('p').innerHTML = `<p>${saldo}</p>`

let categorias = [
    {categoria:'Fixas',valor:1000},
    {categoria:'Lazer',valor:200},
    {categoria:'Lazer',valor:100},

]

lista_categorias = [];
lista_valores_categorias = [];
categorias.forEach((e) => {
    lista_categorias.push(e.categoria)
    lista_valores_categorias.push(e.valor)

});

console.log(lista_categorias)

new Chart(ctx, {
    type: 'doughnut',
    data:{
        labels: lista_categorias,
        datasets:[{
            label:"% por categoria",
            data: lista_valores_categorias,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y:{
                beginAtZero: true
            }
        }
    }

}

)

new Chart(ctx2, {
    type: 'bar',
    data:{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets:[{
            label:"Qtde. Votos",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y:{
                beginAtZero: true
            }
        }
    }

}

);

