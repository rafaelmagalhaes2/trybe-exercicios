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

4. Nesse arquivo .css, adicione os estilos para que:
    
    O texto das tags ‘h1’ e ‘p’ estejam centralizados.
    A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
    A fonte do item mude quando ele for clicado.

5. Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.

6. No ‘style.css’, adicione a propriedade ‘list-style: none’ para ambas as listas.
