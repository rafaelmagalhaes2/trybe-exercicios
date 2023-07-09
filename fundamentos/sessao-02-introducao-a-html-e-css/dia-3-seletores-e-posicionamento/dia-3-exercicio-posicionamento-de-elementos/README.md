# 🎯 Dia 3 - HTML e CSS - Seletores e Posicionamento

## Exercício - Posicionamento de Elementos 🚀
### Para fixar

#### Utilize os arquivos index.html e style.css abaixo:

#### index.html

    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Mario</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <h1>Exercício do Mario</h1>
        <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
        <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
        <img src="https://bit.ly/3AVnjks" alt="bowser" class="bowser" />
        <p class="speach">
          Goomba, do something!
        </p>
        <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
      </body>
    </html>

#### style.css

    .super-mario {
      width: 200px;
    }

    .goomba {
      width: 100px;
    }

    .baloon {

    }

    .speach {
      font-size: 25px;
    }

    .bowser {
      width: 200px;
    }
    
  
1. Posicione o Mário acima do Goomba.
  
![Captura de tela de 2023-05-28 06-19-49](https://github.com/rafaelmagalhaesguedes/trybe-exercicios/assets/8412507/5c6af4c2-eb6c-4c44-8ce7-1b3e54d9ac3b)

2. Posicione o Bowser à direita do Goomba.

![Captura de tela de 2023-05-28 06-21-43](https://github.com/rafaelmagalhaesguedes/trybe-exercicios/assets/8412507/0aea7af2-10cd-4656-81d3-e81b01b0069d)

3. Posicione o balão para que se torne uma fala de Bowser.

![Captura de tela de 2023-05-28 06-25-44](https://github.com/rafaelmagalhaesguedes/trybe-exercicios/assets/8412507/28c7cacb-63da-4340-8ad4-ac11c219f51e)

4. Posicione o texto da tag p para que fique dentro do balão de fala.

![Captura de tela de 2023-05-28 06-30-20](https://github.com/rafaelmagalhaesguedes/trybe-exercicios/assets/8412507/c8b36def-4c61-4f8c-b6d0-a6f1389e4c1e)

### Arquivo CSS editado com as alterações solicitadas no exercício

      .super-mario {
        width: 200px;
        position: absolute;
        left: 100px;
      }

      .goomba {
        width: 100px;
        position: absolute;
        top: 380px;
        left: 155px;
      }

      .baloon {
        position: absolute;
        left: 400px;
        top: 210px;
      }

      .speach {
        font-size: 25px;
        position: absolute;
        left: 420px;
        top: 250px;
        z-index: 2;
      }

      .bowser {
        width: 200px;
        position: absolute;
        top: 360px;
        left: 700px;
      }
