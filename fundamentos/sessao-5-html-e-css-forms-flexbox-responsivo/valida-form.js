// Captura elemento Form
const validaForm = document.querySelector('#main-form');

// Executa validação do formulário
validaForm
   // Valida input fullName
  .addField(document.querySelector('#fullName'), [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  // Valida input email
  .addField(document.querySelector('#email'), [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ])
  // Valida textarea
  .addField(document.querySelector('#question'), [
    {
      rule: 'cols',
      value: 30,
    },
    { 
      rule: 'rows',
      value: 10,
    },
    {
      rule: maxlength,
      value: 500,
    },
  ])
  // Valida checkbox
  .addField(document.querySelector('#agreement'), [
    {
      rule: 'required',
    },
  ]);