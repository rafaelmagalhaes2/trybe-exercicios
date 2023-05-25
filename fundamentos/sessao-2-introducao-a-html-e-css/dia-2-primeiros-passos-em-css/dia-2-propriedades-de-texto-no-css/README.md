# :dart: Dia 2 - Primeiros passos em CSS

## :rocket: Exercício - Propriedades de text no CSS

1. Adicione o arquivo index.html

    touch index.html

2. Adicione o template abaixo: 

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML</title>
        <style>
        </style>
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

3. Modifique o font-family do h1 para sans-serif;

    h1{
        font-family: sans-serif;
    }

4. Deixe o parágrafo com o font-weight 600;

    p{
        font-weight: 600px;
    }

5. Modifique o font-size do body para 16px;
    
    body{
        font-size: 16px;
    }

6. Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do body;
    
    p{
        font-weight: 600px;
            font-size: 48px;
    }

7. Explore as propriedades font-style, line-height, text-align e text-decoration;

    h1{
        font-family: sans-serif;
        font-style: normal;
        text-align: center;
    }
    p{
        font-weight: 600px;
        font-size: 48px;
        line-height: 5px;
    }
    body{
        font-size: 16px;
        text-decoration: none;
    }

8. Troque a cor de fundo de cada item da lista para a cor correspondente ao texto.

    <!-- HTML -->
    <ul>
      <li class="amarelo">Amarelo</li>
      <li class="vermeho">Vermelho</li>
      <li class="marrom">Marrom</li>
    </ul>

    <!-- CSS -->
    .amarelo{
        background-color: yellow;
    }
    .vermelho{
        background-color: red;
    }
    .marrom{
        background-color: brown;
    }