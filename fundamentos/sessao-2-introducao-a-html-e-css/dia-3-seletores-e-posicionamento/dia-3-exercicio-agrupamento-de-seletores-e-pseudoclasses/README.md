# 🎯 Dia 3 - HTML e CSS - Seletores e Posicionamento

## Exercício - Agrupamento de Seletores e Pseudoclasses 🚀

### Para fixar

1. Copie o código HTML abaixo e faça o que for pedido:

    -> index.html

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Agrupando Seletores</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>Lista dos Melhores Sites que já vi</h1>
            <p>Top 3 dos melhores sites que existem na web</p>
            <p>Principais motivos para eu gostar deles</p>
        </body>
        </html>

2. Adicione uma lista ordenada dos 3 melhores sites que você conhece.
        
    Resp:
        
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Agrupando Seletores</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>Lista dos Melhores Sites que já vi</h1>

            <ul>
                <li><a href="https://www.nasa.gov/">NASA</a></li>
                <li><a href="https://www.blizzard.com/pt-br/">Blizzard</a></li>
                <li><a href="https://www.worldometers.info/">World o Meter</a></li>
            </ul>

            <p>Top 3 dos melhores sites que existem na web</p>
            <p>Principais motivos para eu gostar deles</p>
        </body>
        </html> 

3. Crie um arquivo no mesmo diretório e nomeie-o de ‘style.css’.

    Resp:
        
        touch style.css

4. Nesse arquivo .css, adicione os estilos para que:
    
    O texto das tags ‘h1’ e ‘p’ estejam centralizados.
    A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
    A fonte do item mude quando ele for clicado.

    Resp:

    h1, p {
      text-align: center;
    }

    li:hover {
      background-color: brown;
    }

    li:active {
      font-size: 2em;
    }

5. Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.

    Resp:

        <ul>
        <li>Usabilidade</li>
        <li>Funcionalidade</li>
        <li>Navegabilidade</li>
        </ul>

6. No ‘style.css’, adicione a propriedade ‘list-style: none’ para ambas as listas.

    Resp:

        h1, p {
        text-align: center;
        }

        ul {
        list-style: none;
        }

        li:hover {
        background-color: brown;
        }

        li:active {
        font-size: 2em;
        }

7. Para este exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudo-classes para individualizar cada elemento!

    copie o arquivo index.html abaixo:

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Pseudo-classes</title>
            <link rel="stylesheet" href="style.css">
        </head>
            <body>
                <h1>Paleta de Cores</h1>
                <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
                <div>
                    <h3>Cor primária</h3>
                </div>
                <div>
                    <h3>Cor Secundária</h3>
                </div>
                <div>
                    <h3>Cor Complementar</h3>
                </div>
                <div>
                    <h3>Cor Escura</h3>
                </div>
                <div>
                    <h3>Cor Clara</h3>
                </div>
            </body>
        </html>

8.  Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.

    Resp:

        div:hover {
          border: 3px solid slateblue;
        }

9.  Faça cada div ter uma cor de fundo própria.

    Resp: 

        CSS

        .amarelo {
        background-color: yellow;
        }

        .roxo {
        background-color: purple;
        }

        .vermelho {
        background-color: red;
        }

        .verde {
        background-color: green;
        }

        .cinza {
        background-color: gray;
        }

        HTML

        <div class="amarelo">
            <h3>Cor primária</h3>
        </div>
        <div class="roxo">
            <h3>Cor Secundária</h3>
        </div>
        <div class="vermelho">
            <h3>Cor Complementar</h3>
        </div>
        <div class="verde">
            <h3>Cor Escura</h3>
        </div>
        <div class="cinza">
            <h3>Cor Clara</h3>
        </div>

10. Estilize cada uma das tags h3 da maneira que achar melhor (cor, tamanho, estilo e família).

    Resp:

        h3 {
            color: black;
            font-size: 1.5em;
            font-style: normal;
            font-family:'Courier New', Courier, monospace;
        }

11. Faça a terceira div ser maior que as demais.

    Resp:

        .amarelo {
            background-color: yellow;
        }

        .roxo {
            background-color: purple;
        }

        .vermelho {
            background-color: red;
            height: 100px;
        }

        .verde {
            background-color: green;
        }

        .cinza {
            background-color: gray;
        }

12. Deixe as tags ímpares h3 com o texto em itálico.

    Resp:

        .amarelo {
            background-color: yellow;
        }

        .amarelo h3 {
            font-style: italic;
        }

        .roxo {
            background-color: purple;
        }

        .vermelho {
            background-color: red;
            height: 100px;
        }

        .vermelho h3 {
            font-style: italic;
        }

        .verde {
            background-color: green;
        }

        .cinza {
            background-color: gray;
        }

        .cinza h3 {
            font-style: italic;
        }
        
## Layout final

![Captura de tela de 2023-05-28 09-00-47](https://github.com/rafaelmagalhaesguedes/trybe-exercicios/assets/8412507/526f2420-d89b-470b-a3e0-25ed8cdb70db)


