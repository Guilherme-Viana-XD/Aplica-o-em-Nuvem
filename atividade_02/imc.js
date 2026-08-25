const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Digite seu peso (Kg): ', (peso) => {
    r1.question('Digite sua altura (M): ', (altura) => {

        const pesoNumero = Number(peso);
        const alturaNumero = Number(altura)

        const imc = pesoNumero / (alturaNumero * alturaNumero);

        console.log(`Seu imc é: ${imc.toFixed(2)}`);

        if (imc >= 25){
            console.log('Voce está acima do peso.');
        }else {
            console.log('Voce está abaixo do peso');
        }

        r1.close();
    });
});