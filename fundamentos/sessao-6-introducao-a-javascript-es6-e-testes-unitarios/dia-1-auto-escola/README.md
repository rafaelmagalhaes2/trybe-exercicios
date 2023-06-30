# :dart: Sessão 6 - Dia 1 - Fluxo de Exceções

## Exercício - Trabalhando em uma auto escola parte 1 🚀

- A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
- Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
- Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
- Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'

Solução:
  
// Função para validar as informações
const validaInfo = (name, age) => {
    if ( !name || !age) {
        throw new Error('Todas as informações são necessárias');
    }
};

// Função para validar a idade
const validaAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
};

// Função para registrar
const studentRegister = (name, age) => {
    
    try {
        validaInfo(name, age);
        validaAge(age);
        const message = `${name}, seja bem-vindo(a) à AuTrybe!`;
        return message;
    } catch (error) {
        return error.message;
    }
};
// Debug
console.log(studentRegister('Rafael', 33));

