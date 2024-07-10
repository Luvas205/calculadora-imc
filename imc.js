const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value.replace(',', '.');
    let peso = document.getElementById('peso').value.replace(',', '.');
    const resultado = document.getElementById('resultado');

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    if (nome !== '' && altura !== '' && peso !== '') {
        const calculo = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';

        if (calculo < 18.5) {
            classificacao = 'você está abaixo do peso.';
        } else if (calculo < 25) {
            classificacao = 'você está no peso ideal. Parabéns!';
        } else if (calculo < 30) {
            classificacao = 'você está levemente acima do peso.';
        } else if (calculo < 35) {
            classificacao = 'você está com obesidade grau I.';
        } else if (calculo < 40) {
            classificacao = 'você está com obesidade grau II.';
        } else {
            classificacao = 'você está com obesidade grau III (mórbida). Cuidado!';
        }

        resultado.textContent = `${nome}, seu IMC é de ${calculo} e ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente!';
    }
}

calcular.addEventListener('click', imc);
