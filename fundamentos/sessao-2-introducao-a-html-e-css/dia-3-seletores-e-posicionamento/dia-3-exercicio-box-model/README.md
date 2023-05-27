# Dia 3 - HTML e CSS - Seletores e Posicionamento

## Exercício - Box model - Modelo de caixas no CSS

    style.css

        .caixa {
            color: white;
            display: inline-block;
            line-height: 50px;
            text-align: center;
            vertical-align: top;
        }

        .width-and-height {
            height: 50px;
            width: 50px;
        }

        /* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
        .padding {

        }

        /* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
        .margin {

        }

        /* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
        .border {
            
        }

    index.html

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Exercício: box model</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="caixa width-and-height" style="background: #036b52">A</div>
            <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
            <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
            <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
        </body>
        </html>


#### 1. Alterar de acordo com as instruções dos comentários que estão dentro do arquivo style.css.

    style.css alterado.

        .caixa {
            color: white;
            display: inline-block;
            line-height: 50px;
            text-align: center;
            vertical-align: top;
        }
        
        .width-and-height {
            height: 50px;
            width: 50px;
        }
        
        /* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
            .padding {
            padding: 20px;   
        }
        
        /* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
        .margin {
            margin: 30px;
        }
        
        /* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
        .border {
            border: 5px solid black;
        }

#### Layout final 