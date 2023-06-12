/*
  1 - Função para alterar o texto
*/
const changeText = () => {
    const paragraph1 = document.getElementsByTagName('p')[1];
    paragraph1.innerText = 'Daqui a dois anos, concerteza estarei bem mais inteligente e '
     + 'preparado para o mercado de trabalho, estudando na Trybe e me dedicando ao máximo.';
  };
  // Executa a função changeText()
  changeText();
  
  /*
    2 - Função para alterar a cor do elemento amarelo
  */
  const changeColor = () => {
    const mainContent = document.getElementsByClassName('main-content')[0];
    mainContent.style.backgroundColor = 'rgb(76, 164, 109)';
  };
  // Executa a função changeColor()
  changeColor();
  
  /*
    3 - Função para alterar a cor do elemento vermelho
  */
  const changeColorToWhite = () => {
    const centerContent = document.getElementsByClassName('center-content')[0];
    centerContent.style.backgroundColor = 'white';
  };
  // Executa a função changeColorToWhite()
  changeColorToWhite();
  
  /*
    4 - Função para Corrigir o texto do título h1
  */
  const correctTitle = () => {
    const title = document.getElementsByClassName('title')[0];
    title.innerText = 'Desafio - JavaScript';
  };
  // Executa a função correctTitle
  correctTitle();
  
  /*
    5 - Função para modificar o texto para letras maiúsculas
  */
  const capitalLetters = () => {
    const paragraph0 = document.getElementsByTagName('p')[0];
    // Obtém o conteúdo de texto da tag <p>
    const text = paragraph0.textContent;
    // Transforma o texto em maiúsculo
    const upperCaseText = text.toUpperCase();
    // Aplica o texto maiúsculo ao parágrafo
    paragraph0.textContent = upperCaseText;
  };
  // Executa a função capitalLetters()
  capitalLetters();
  
  /*
    6 -Função para exibir todas as tags <p>
  */
  const showTags = () => {
    // Seleciona a sessão principal com classe center-content
    const classCenterContent = document.querySelector('.center-content');
    // Obtém todas as tags <p> que estão dentro da sessão principal
    const paragraphs = classCenterContent.getElementsByTagName('p');
    // Cria um array vazio para receber os conteúdos das tags <p>
    const contents = [];
    // Percorre todas as tags <p> através do loop for
    for (let index = 0; index < paragraphs.length; index += 1) {
      // Insere todos os conteúdos das tags <p> no array
      contents.push(paragraphs[index].textContent);
    }
    // Seleciona a sessão footer e a tag <p>
    const footerContent = document.querySelector('footer p');
    // Exibi as informações no parágrafo do footer
    footerContent.textContent = contents.join(' '); // O join() separa as string por espaço
  };
  // Executa a função showTags()
  showTags();