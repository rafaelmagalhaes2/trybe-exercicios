# :dart: Dia 2 - Primeiros passos em CSS

## :rocket: Exercício - CSS inline e externo

#### Para começar vamos criar o index.html com a estrutura abaixo

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Trybe</title>
            <style>
            h1 {
                color: seagreen;
                font-size: 65px;
                font-family: sans-serif, Helvetica; 
            }

            .cor-de-fundo {
                background-color: whitesmoke;
            }

            p {
                font-weight: 600;
            }

            body {
                font-size: 16px;
            }

            li {
                font-style: italic;
                line-height: 60px;
                text-align: center;
                text-decoration: underline;
                font-size: 2em;
            }

            #verde {
                background-color: green;
            }

            #verde-escuro {
                background-color: seagreen;
            }

            #azul {
                background-color: blue;
            }
            </style>
        </head>
        <body>
            <h1>Trybe</h1>
            <h2 class="cor-de-fundo">Um novo curso para sua vida</h2>
            <p class="cor-de-fundo">A porta de entrada para a sua carreira em tecnologia</p>
            <ul>
            <li id="verde">Ensinamos a programar</li>
            <li id="verde-escuro">Ensinamos a aprender</li>
            <li id="azul">Ensinamos a trabalhar</li>
            </ul>
        </body>
        </html>
 
## Pergunta e resposta

 1. Coloque todo o CSS da tag style em um arquivo externo.

    Resp: Primiro criamos o arquivo style.css, pode ser criado via terminal com o comando
    touch style.css.
    Após criar o arquivo style.css, copiamos todo o códido que está entre a tag style no html abaixo
    e copiamos para o novo arquivo style.css. Salve o arquivo e volte ao html.
    No html temos que linkar nosso css externo que acabamos de criar. Apague todo o código CSS do html.
    Após apagar todo o código CSS do código html, vamos linkar nosso CSS externo. 
    Para linkar o código usamos:
        
        <link rel="stylesheet" href="style.css">

        --> index.html

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Trybe</title>
            <link rel="stylesheet" href="style.css">
            
        </head>
        <body>
            <h1>Trybe</h1>
            <h2 class="cor-de-fundo">Um novo curso para sua vida</h2>
            <p class="cor-de-fundo">A porta de entrada para a sua carreira em tecnologia</p>
            <ul>
            <li id="verde">Ensinamos a programar</li>
            <li id="verde-escuro">Ensinamos a aprender</li>
            <li id="azul">Ensinamos a trabalhar</li>
            </ul>
        </body>
        </html>

        --> style.css

        h1 {
          color: seagreen;
          font-size: 65px;
          font-family: sans-serif, Helvetica; 
        }

        .cor-de-fundo {
          background-color: whitesmoke;
        }

        p {
          font-weight: 600;
        }

        body {
          font-size: 16px;
        }

        li {
          font-style: italic;
          line-height: 60px;
          text-align: center;
          text-decoration: underline;
          font-size: 2em;
        }

        #verde {
          background-color: green;
        }

        #verde-escuro {
          background-color: seagreen;
        }

        #azul {
          background-color: blue;
        }


