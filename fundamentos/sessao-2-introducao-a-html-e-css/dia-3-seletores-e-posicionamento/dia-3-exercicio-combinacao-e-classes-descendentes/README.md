# 🎯 Dia 3 - HTML e CSS - Seletores e Posicionamento

## Exercício - Combinação e classes descendentes 🚀

### Para fixar

#### Crie o arquivo index.html com a estutura abaixo:

    touch index.html

    cat >> index.html

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        <title>#GoTrybe</title>
    </head>
    <body>
        
        <h1><em>Combinações e Classes Descendentes</em></h1><br />
        
        <h3>Top 5 frases memoráveis:</h3>
        
        <ol>
            <li>
            <em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)
            </li>
            <li>
                <em>Houston, temos um problema.</em> - Jack Swigert
            </li>
            <li>
                <em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela
            </li>
            <li>
                <em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)
            </li>
            <li>
                <em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)
            </li>
        </ol>
            
        <h3>As maiores linguagens de programação:</h3>
            
        <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>C#</li>
            <li>C / C++</li>
        </ul>
           
        <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
           
        <ul>
            <li>
                <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
            </li>
            <li>
                <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
            </li>
            <li>
                <a href="https://devdocs.io/" target="_blank">DevDocs</a>
            </li>
            <li>
                <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
            </li>
        </ul>
    </body>
    </html>

#### Crie o arquivo style.css

    touch style.css

    vá para o visual code

    code .

##### Exercícios

1. Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).

    ol li {
      background-color: yellow;
    }

    ol li:nth-child(even) {
      color: green;
    }
    
    ol li:nth-child(odd) {
      text-transform: uppercase;
    }

2. Faça todas as tags Header (h1, h2…) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.
    
    h1 em, h2 em {
        font-size: 40px;
        border: 1px solid black;
    }

3. Faça todas as li’s terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
    
    li {
      font-size: 20px;
    }

    li em {
      font-weight: 700;
    }

4. Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir “java*” no texto, utilize uma cor de fundo rosa.

    .bg-rosa {
      background-color: pink;  
    }

5. (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte “temática do site”.

Dica 1: Utilize o seletor :hover para controlar o passar do mouse.

Dica 2: Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).

    .lista li a:hover {
    font-weight: 700;
    }
    
    .lista li a[href*="stackoverflow"] {
    color: orange;
    }
    
    .lista li a[href*="w3schools"] {
    color: green;
    }
    
    .lista li a[href*="mozilla"] {
    color: black;
    }
    
    .lista li a[href*="devdocs"] {
    color: yellow;
    }
    
    .lista li a[href*="trybe"] {  
    color: green;
    }

## Layout final
