let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clique() {
    console.log('O botão foi clicado!');
}

function alerta() {
    alert ('Eu amo JavaScript!');
}

function pergunta() {
    cidade = prompt('Digite uma cidade do Brasil ');
    alert(`Estive em ${cidade} e lembrei de você. `);
}

function somar() {
    n1 = parseInt(prompt('Digite o primeiro número'));
    n2 = parseInt(prompt('Digite o segundo número'));
    soma = n1 + n2;
    alert(`A soma de ${n1} + ${n2} é igual à ${soma}.`);
}

/* função anônima
 let saudacao = function() {alert('Função anônima')} */
