const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Este programa vai checar se você é maior de 18 anos e tem habilitação para saber se pode dirigir.');
console.log('Além das verificações, precisamos verificar se você está na lista do horário.');

readLine.question("Qual o ano que você nasceu? ", ano => {
    const maiorDeIdade = parseInt(ano) <= 2005; // Verifica se a pessoa tem 18 anos ou mais (considerando o ano atual como 2023)
    
    readLine.question('Você tem habilitação? ("sim/não") ', temHabilitacao => {
        const possuiHabilitacao = temHabilitacao.toLowerCase() === "sim"; // Verifica se a pessoa tem habilitação
        
        // Independente das respostas anteriores, pergunta o nome
        readLine.question('Qual seu nome? ', nome => {
            const nomeNaLista = ["douglas", "genilson"].includes(nome.toLowerCase()); // Verifica se o nome está na lista permitida
            
            if (maiorDeIdade && possuiHabilitacao && nomeNaLista) {
                console.log(`Bem-vindo ao kart, ${nome}!`);
            } else if (!maiorDeIdade) {
                console.log("Você não tem 18 anos.");
            } else if (!possuiHabilitacao) {
                console.log("voce não pode entrar habilitação obrigatoria.");
            } else if (!nomeNaLista) {
                console.log("Seu nome não está na lista de convidados.");
            }

            readLine.close(); // Fecha a interface após todas as verificações
        });
    });
});
