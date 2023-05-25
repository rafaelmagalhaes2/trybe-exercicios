# :dart: Dia 2 - Primeiros passos em CSS

## :rocket: Exercício - Introdução ao CSS

1 . Crie o arquivo index.html e cole o esqueleto abaixo;
        
    ex: touch index.html
        code .
            
        Adicione o código abaixo no index.html e salve.

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML</title>
        <style></style>
    </head>
    <body>
        <h1>Frutas</h1>
        <p>Qual é a sua fruta favorita?</p>
        <ul>
        <li>Maçã</li>
        <li>Banana</li>
        <li>Goiaba</li>
        </ul>
    </body>
    </html>

2. Modifique o tamanho do h1 para 65 pixels;

    ex: crie uma classe e dentro da tag h1
    
        <h1 class="titulo"><h1> 
    
    Modifique a class no CSS
        
        .titulo{
            font-size: 65px;
        }

3. Modifique a cor do texto do h1 para laranja;

    ex: na class titulo ainda, modifique a cordo texto para:
    .titulo{
        color: orange;
    }

4. Modifique a cor de fundo da lista não ordenada;

    ex: cria uma class para a nossa lista, a tag ul

        <ul class="lista">

    Agora modifique o CSS

        .lista{
            background-color: green;
        }

5. Crie uma classe para modificar a cor de fundo da tag p e da ul ao mesmo tempo.

    ex: crie uma class para os dois elementos
        <p class="cor-de-fundo">
        <ul class="cor-de-fundo">
    
    Modifique o CSS

        .cor-de-fundo{
            background-color: blue;
        }
