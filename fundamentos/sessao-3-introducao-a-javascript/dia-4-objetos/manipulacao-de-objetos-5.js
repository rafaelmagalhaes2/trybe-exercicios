
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
    Crie uma função que retorne a soma do número total de estudantes em todos os cursos. 
*/
const totalStudents = (array) => { 
    
    let sum = 0;

    for( let i = 0; i < array.lessons.length; i += 1 ) {
        sum += array.lessons[i].students;
    }
    
    return sum;
 }

console.log(totalStudents(school));
