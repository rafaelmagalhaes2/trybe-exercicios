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
