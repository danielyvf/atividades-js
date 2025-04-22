const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recibimento de Taxa cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0; // fora da função pois irá somar com outra variável
let recebimentoTotal = 0;
transacoes.forEach((item) => { // forEach irá percorrer todos os itens 
    const numeroLimpo = +item.valor.replace('R$ ',''); // +item converte de string para número, enquanto o replace substitui o r$ por uma string vazia
    if (item.descricao.slice(0, 4) === 'Taxa') { // se a descrição for igual a taxa, irá somar com o primeiro valor, no caso 39
        taxaTotal += numeroLimpo; // loop novamente
    } else if (item.descricao.slice(0, 4) === 'Rece') {
        recebimentoTotal += numeroLimpo;
    }
})
console.log(taxaTotal)
console.log(recebimentoTotal)

// retornando array da lista

const transportes = 'Carro;Avião;Trem,ÔNIBUS;Bicicleta';

const arrayTransportes = transportes.split(';') // split quebra os itens  em array
console.log(arrayTransportes);

// substituindo todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
                </ul>`;

html = html.split('span').join('a'); // no split já se tornou uma array e o join insere o a

console.log(html);

// Retorne o último caracter da frase 
const frase = 'Melhor do ano!';

console.log(frase[frase.lenght - 1]) // o slice -1 também retorna o último caractere

// retorne o toral de taxas
const transacoes2 = ['Taxa do Banco', '  TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial']; //array

let taxaTotal = 0;
transacoes2.forEach((item) => { // forEach para falar com cada item
    item = item.toLowerCase(); // mudar todos os itens para letras minuscúlas 
    item = item.trim(); // retira todo os espaços // o trim também pode ser encadeado após o toLowerCase
    item = item.slice(0,4); // pega os 4 primeiros caracteres

    if(item === 'taxa') // o taxa pode ser substituído por outras informações como depó e tari
        taxasTotal++ // ++incremento 
})
console.log(taxaTotal)
