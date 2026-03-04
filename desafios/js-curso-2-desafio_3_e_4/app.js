let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function lista3() {
    let x = parseInt(prompt('Digite um número'));
    tabuada(x);
}

function lista4() {
    lista();
}

function pergunta() {

}

function somar() {

}

// -- Lista 3

// Ex1
function imc() {
    let peso = parseFloat(prompt('Digite seu peso'));
    let alt = parseFloat(prompt('Digite sua altura'));
    let imc = peso / (alt ** 2);
    let mensagem = '';

    if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        mensagem = 'Excesso de peso';
    } else if (imc >= 30 && imc < 35) {
        mensagem = 'Obesidade';
    } else if (imc > 35) {
        mensagem = 'Obesidade extrema';
    } else {
        mensagem = 'ERRO';
    }

    alert(`IMC: ${imc.toFixed(2)} - ${mensagem}`);


}

// Ex2
function fat() {
    let resul = 1;
    let nFat = parseInt(prompt('Digite o número fatorial'));
    let i = 0;

    if (nFat == 0 && nFat == 1) {
        resul = 1;
    } else {
        while (i < nFat) {
            resul = resul * (nFat - i);
            i ++;
        }
    }

    alert(`${nFat}! = ${resul}`);
}

// Ex3
function conv() {
    let val = 0;
    let valConv = 0;
    let selec = prompt('Selecione a conversão desejada: 1- Real -> Dólar | 2- Dólar -> Real');
    
    if (selec == 1) {
        val = parseFloat(prompt('Digite o valor em Reais'));
        valConv = val / 5.16;
        alert(`Cotação atual do Dólar R$5,16 - 24/02/26\nUS$${valConv.toFixed(2)}`);
    } else if (selec == 2) {
        val = parseFloat(prompt('Digite o valor em Dólar'));
        valConv = val * 5.16;
        alert(`Cotação atual do Dólar R$5,16 - 24/02/26\nR$${valConv.toFixed(2)}`);
    } else {
        alert('Erro: Valor inválido!');
    }
}

// Ex4
function areaQuadrada() {
    let larg = parseFloat(prompt('Digite a largura'));
    let compr = parseFloat(prompt('Digite o comprimento'));
    let area = larg * compr;
    let perim = (larg * 2) + (compr * 2);
    alert(`Sala ${larg}m x ${compr}m: Área = ${area}m²; Perímetro = ${perim}m`);
}

// Ex5
function areaCircular() {
    let raio = parseFloat(prompt('Digite o raio'));
    let area = (raio ** 2) * 3.14;
    let perim = (raio * 2) * 3.14;
    alert(`Sala ${raio}m² x Pi: Área = ${area}m²; Perímetro = ${perim}m`);
}

// Ex6
function tabuada(n) {
    let tabuada = `- Tabuada do ${n} -\n`;
    
    for (let i = 1; i <= 10; i++){
        tabuada = tabuada.concat(`${n} x ${i} = ${n * i}\n`);
    }
    alert(tabuada);
}

// -- Lista 4

function lista() {
    let linguagensDeProgramacao = ['Kotlin', 'Python', 'JavaScript', 'Java'];
    let msg = '';
    for (let i = 0; i < linguagensDeProgramacao.length; i++) {
        msg = msg.concat(`${i + 1} - ${linguagensDeProgramacao[i]}  |  `);
    }
    let selec = (parseInt(prompt(`${msg}\nSelecione sua linguagem preferida`)));
    if (selec < linguagensDeProgramacao.length && selec >= 1) {
        alert(`${linguagensDeProgramacao[selec - 1]} é muito legal :)`);
    } else if (selec == linguagensDeProgramacao.length) {
        alert(`${linguagensDeProgramacao[selec - 1]}? kkkkk Meus pêsames!`);
    } else {
        console.log(`Erro: ${selec} não é um valor válido!`);
    }
}