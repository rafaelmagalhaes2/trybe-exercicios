
/*
    Imagine que você esteja responsável por exibir a lista de emails de todas as pessoas que 
    trabalham na mesma empresa que você. Para isso, você pode utilizar o forEach para apresentar 
    os emails.

    Use o método forEach para exibir a lista de emails com a seguinte frase: 
    O email ${email} está cadastrado em nosso banco de dados!.
*/

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

//
// Primeira solução, passamos a callback diretamente no foreach
//
emailListInData.forEach((email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
});

//
// Segunda solução, separamos a callback do foreach em uma outra função
//
const exibirListaEmail = (email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`);

emailListInData.forEach(exibirListaEmail);