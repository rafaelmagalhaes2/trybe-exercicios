
/*  Exercício 4  

    Adicione as propriedades email, fone, userGithub e linkedIn ao objeto 
    customer (do exemplo anterior), chamando a função addProperty. 
*/

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
    if (typeof object[key] === 'undefined') {
        object[key] = value;
    }
};

addProperty(customer, 'email', 'noobcoder@gmail.com');
addProperty(customer, 'fone', '999 - 9999');
addProperty(customer, 'userGitHub', 'codadorNoob');
addProperty(customer, 'linkedin', 'https://linkedin.com/noobcodador');

console.log(customer)

