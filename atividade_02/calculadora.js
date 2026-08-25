const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    const numero1 = Number(num1);

    rl.question('Digite o segundo número: ', (num2) => {
        const numero2 = Number(num2);

        rl.question('Escolha a operação (+, -, *, /): ', (operacao) => {
            let resultado;

            switch (operacao) {
                case '+':
                    resultado = numero1 + numero2;
                    break;

                case '-':
                    resultado = numero1 - numero2;
                    break;

                case '*':
                    resultado = numero1 * numero2;
                    break;

                case '/':
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                    } else {
                        console.log('Erro: Divisão por zero não é permitida.');
                        rl.close();
                        return;
                    }
                    break;

                default:
                    console.log('Operação inválida. Por favor, escolha entre +, -, * ou /.');
                    rl.close();
                    return;
            }

            console.log(`O resultado de ${numero1} ${operacao} ${numero2} é: ${resultado}`);
            rl.close();
        });
    });
});