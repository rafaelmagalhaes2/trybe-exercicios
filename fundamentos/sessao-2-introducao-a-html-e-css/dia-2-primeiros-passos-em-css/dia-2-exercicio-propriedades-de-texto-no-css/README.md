# :dart: Dia 2 - Primeiros passos em CSS

## :rocket: Exercício - Propriedades de texto no CSS

#### Para começar vamos criar o index.html com a estrutura abaixo

      <!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <title>HTML</title>
          <style></style>
        </head>
        <body>
          <h1>Cores</h1>
          <p>Qual é a sua cor favorita?</p>
          <ul>
            <li>Amarelo</li>
            <li>Vermelho</li>
            <li>Marrom</li>
          </ul>
        </body>
      </html>

1. Modifique o font-family do h1 para sans-serif;

    h1 { font-family: sans-serif; }

2. Deixe o parágrafo com o font-weight 600;

    p { font-weight: 600; }

3. Modifique o font-size do body para 16px;
    
    body { font-size: 16px; }

4. Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do body;

    p { font-size: 48px; }

5. Explore as propriedades font-style, line-height, text-align e text-decoration;
    
    /* font-style */
    h1 {
      font-family: sans-serif;
      font-style: italic;
    }
    
    /* line-height */
    p {
      font-weight: 600;
      font-size: 48px;
      line-height: 20px;    
    }
    
    /* text-align */
    p {
      font-weight: 600;
      font-size: 48px;
      line-height: 20px;
      text-align: justify;      
    }

    /* text-decoration */
    h1 {
      font-family: sans-serif;
      font-style: italic;
      text-decoration: none;
    }

6. Troque a cor de fundo de cada item da lista para a cor correspondente ao texto.

    .amarelo{ background-color: yellow; }

    .vermelho{ background-color: red; }

    .marrom{ background-color: brown; }
 
 
# Layout final do exercício

![sesso2-dia-2](https://github.com/rafaelmagalhaesguedes/trybe-exercicios/assets/8412507/692da090-6c25-4335-88ad-c61598f298a1)

