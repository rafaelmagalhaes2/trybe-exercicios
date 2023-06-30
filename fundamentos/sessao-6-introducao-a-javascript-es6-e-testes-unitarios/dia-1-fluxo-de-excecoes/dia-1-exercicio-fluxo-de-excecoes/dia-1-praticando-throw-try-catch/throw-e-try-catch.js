//
// Testando Comandos Throw Try Catch
//

// Função para verificar números
const verifyIsNumber = (x, y) => {
  if ( typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Os valores devem ser númericos.');
  }
};

// Função para somar dois números
const sum = (x , y ) => {
    try {
      verifyIsNumber(x, y);
      return x + y;
    }
    catch(error) {
        return error.message;
    }
};

// Depuração
console.log(sum(1, 5));
