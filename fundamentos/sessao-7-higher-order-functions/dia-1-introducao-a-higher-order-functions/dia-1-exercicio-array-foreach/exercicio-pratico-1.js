/* 
    Você ficou responsável por organizar o sistema de contratação de uma empresa e 
    deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } 
    para representar a nova pessoa contratada. Além disso, você deve gerar os emails 
    de cada pessoa que é contratada na empresa. Para isso:

    crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora 
    e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

    utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro 
    e criar o objeto de cada pessoa contratada.
*/

const newEmployees = (newEmployees) => {
    const employees = {
      id1: employer('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employer('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employer('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const employer = (name) => {
  const email = `${name.toLowerCase().split(' ').join('_')}@trybe.com`;
  return { name, email: `${email}`}
};

console.log(newEmployees());