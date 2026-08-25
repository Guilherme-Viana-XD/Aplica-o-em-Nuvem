const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Digite um ano: ", (entrada) => {
    const ano = Number(entrada);

    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        console.log(`${ano} é um ano bissexto.`);
    } else {
        console.log(`${ano} não é um ano bissexto.`);
    }

    r1.close();
});