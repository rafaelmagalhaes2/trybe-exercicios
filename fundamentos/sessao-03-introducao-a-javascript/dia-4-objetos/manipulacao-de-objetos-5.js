
const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

/*
    1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array. 
*/
const keyValues = (array, pos) => Object.values(array)[pos];

// Passa o Objeto e a posição no array
keyValues(school, 0);

/* 
    2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos. 
*/
const totalStudents = (array) => {

  let sum = 0;

  for (let i = 0; i < array.lessons.length; i += 1) {
    sum += array.lessons[i].students;
  }

  return sum;
}

totalStudents(school);

/*
    3. Crie uma função que verifica se uma determinada chave existe 
    em todos os elementos do array lessons. O retorno deve ser um 
    booleano (true ou false). Essa função deve possuir dois parâmetros: 
    o objeto e o nome da chave. 
*/
const keyElement = (array, key) => {
  for (let index = 0; index < array.lessons.length; index += 1) {
    if (array.lessons[index][key]) {
      return true;
    }
  }
  return false;
};

keyElement(school, 'students');

/*
    4. Crie uma função para alterar o turno para noite no curso de Python. 
    Essa função deve ter três parâmetros: a base de dados a ser modificada, 
    o nome do curso e o novo valor da chave. 
*/
const editTurno = (array, newCurso, key) => {
  let curso;
  for (let index = 0; index < array.lessons.length; index += 1) {
    let element = array.lessons[index];
    if(element.course === newCurso) {
      curso = element;
      break;
    }
  }
  if (curso !== undefined) {
    curso.shift = key;
    return curso;
  }
  else {
    return 'Curso não encontrado';
  }
};

console.log(editTurno(school, 'Python', 'Noite'));