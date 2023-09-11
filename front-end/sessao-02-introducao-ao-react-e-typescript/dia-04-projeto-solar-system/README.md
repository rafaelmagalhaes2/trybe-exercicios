# Boas-vindas ao repositório do projeto Solar System!

Para realizar o projeto, atente a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento de seu projeto com base neste repositório utilizando uma branch específica e um Pull Request para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar seu projeto, você deverá criar um *Pull Request* neste repositório.

  Lembre-se de que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto, você desenvolverá um modelo do Sistema Solar! Ao utilizar essa aplicação, uma pessoa usuária deverá ser capaz de:

    * Visualizar todos os planetas do Sistema Solar renderizados na tela.

    * Visualizar todas as cartas com informações sobre missões espaciais.

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, verificaremos se você é capaz de:

  * Utilizar JSX no React.

  * Utilizar corretamente o método `render()` para renderizar seus componentes.

  * Utilizar `import` para trazer componentes em diferentes arquivos.

  * Criar componentes de classe em React.

  * Criar múltiplos componentes a partir de um array.

  * Fazer uso de `props` corretamente.

  * Fazer uso de `PropTypes` para validar as `props de um componente`.
</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-034-exercise-solar-system.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-034-exercise-solar-system`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique se você está na branch `master`.
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`.
    - Exemplo: `git checkout master`
  - Agora, crie uma branch à qual você vai submeter os `commits` de seu projeto.
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`.
    - Exemplo: `git checkout -b joaozinho-sd-034-exercise-solar-system>`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique se as mudanças ainda não estão no _stage_.
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git.
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial.
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-034-exercise-solar-system`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-034-exercise-solar-system/pulls).
  - Clique no botão verde _"New pull request"_.
  - Clique na caixa de seleção _"Compare"_ e escolha sua branch **com atenção**.
  - Dê um título à sua _Pull Request_.
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_.
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_.
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-034-exercise-solar-system/pulls) e confira se seu _Pull Request_ está criado.

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça regularmente `commits` das alterações que você fizer no código.

  - Lembre-se de sempre atualizar o repositório remoto após um (ou alguns) `commits`.

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez em que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que seu projeto está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DE SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**.

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **seu usuário**.

    - No menu à direita, clique no _link_ **"Reviewers"**, digite `students` e selecione o time `tryber/students-sd-034`.

  Caso tenha alguma dúvida, [assista a este vídeo explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um Pull Request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Utilize o [ESLint](https://eslint.org/) e o [StyleLint](https://stylelint.io/) para fazer a análise estática de seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

  Para poder rodar o _linter_ em um projeto, basta executar o comando `npm install` dentro do projeto e depois `npm run lint` para executar o `ESLint` ou `npm run lint:styles` para executar o `StyleLint`. Se a análise do _linter_ encontrar problemas em seu código, eles serão mostrados em seu terminal. Se não houver problema no código, nada será impresso em seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

  Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

  ⚠️ Lembre-se de que seu projeto só será avaliado se estiver passando pelos **checks** dos **linters**.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Utilize [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para a execução dos testes.

  ### Executando todos os testes

  Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, e uma dessas marcações é o atributo `data-testid`, que será usado aqui.

  Na descrição dos requisitos do projeto, será pedida a adição de atributos `data-testid` aos elementos _HTML_. Observe o exemplo a seguir para compreender melhor como usar esse requisito:

  Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

  ```html
  <button data-testid="my-action"></button>
  ```

  ou

  ```html
  <a data-testid="my-action"></a>
  ```

  Ou seja, o atributo `data-testid="my-action"` servirá para o _React Testing Library_(RTL) identificar o elemento. Desse modo, você conseguirá realizar testes focados no comportamento da aplicação.

  Em alguns requisitos, utilize o `getByRole` para selecionar os elementos de modo semântico. Portanto, atente às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

  Para verificar a solução proposta, você pode executar todos os testes localmente. Para isso, basta executar:

  ```bash
  npm test
  ```

  ### Dica: desativando testes

  Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `.skip` junto à função `it`. Como o nome indica, essa função "pula" um teste:

  ```javascript
  it.skip('Será validado se o componente `<Title />` contém uma tag `h2`', () => {
    render(<Title headline={headlineText} />);
    const headline = screen.getByRole('heading', { level: 2 });
      
    expect(headline).toBeInTheDocument();
  });
  ```

  ![skip-test-image](skip-image.png)

  Outro modo de contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ```javascript
  it.only('Será validado se o componente `<Title />` contém uma tag `h2`', () => {
    render(<Title headline={headlineText} />);
    const headline = screen.getByRole('heading', { level: 2 });
      
    expect(headline).toBeInTheDocument();
  });
  ```

  ![only-test-image](only-image.png)

  ### Executando um teste específico

  Você também pode rodar apenas um arquivo de teste. Por exemplo:

  ```bash
  npm test 03.Title.test.js
  ```

  ou

  ```bash
  npm test 03.Title
  ```

  ⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Você deve desenvolver uma aplicação em React com criação de componentes de classe e passagem de props. Essa aplicação simulará uma visualização do Sistema Solar, bem como informações sobre diversas missões espacias que ocorreram ao longo da história.

  As imagens dos planetas e as informações das missões são fornecidas no projeto. Você terá que desenvolver os componentes necessários para exibi-las na tela, conforme o descrito nos requisitos.
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH34&template=betrybe/sd-0x-exercise-solar-system)

</details>

<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

  Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

  Você pode estar se perguntando: *"Como deixo meu projeto com um layout mais atrativo?"* 🤔

  Para isso, disponibilizamos este [protótipo do Figma](https://www.figma.com/file/V0ShpXzvv8OEi0DlDnXsJq/%5BProjeto%5D%5BFrontend%5D-Solar-System?node-id=2%3A2) para lhe ajudar!

  ⚠️ A estilização de sua aplicação não será avaliada neste projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo de seu jeito.

  Caso queira utilizar a mesma imagem de fundo apresentada no Figma, ela está disponibilizada dentro da pasta `src/images`.

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar seu aprendizado nela é muito importante caso deseje construir uma carreira de sucesso? Compartilhe esse projeto em seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre à sua rede toda a sua evolução.

</details>

# Requisitos

:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: **As imagens são meramente ilustrativas para visualizar o fluxo da aplicação, portanto os nomes devem seguir os requisitos, e não as imagens.** :warning:

## 1. Crie um componente chamado `Header`

<details>
  <summary>Crie um componente chamado <code>Header</code> dentro da pasta <code>src/components</code>. Esse componente vai renderizar o título principal da página.</summary>

  - Ele deve conter uma tag `header` e, dentro dela, uma tag `h1`. O texto da tag `h1` deve ser "Sistema Solar".
    
  - Renderize o componente `Header` dentro do componente principal `App`.

  ![Screenshot](/examples/req1.png)
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o componente `<Header />` é renderizado.

  * Se o componente `<Header />` contém uma tag `header`.

  * Se o componente `<Header />` contém uma tag `h1`.

  * Se o componente `<Header />` renderiza corretamente o texto "Sistema Solar".

  * Se o componente `<Header />` está sendo renderizado no componente principal `App`.
</details>

---

## 2. Crie um componente chamado `SolarSystem`

<details>
  <summary>Crie um componente chamado <code>SolarSystem</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `SolarSystem` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="solar-system"`.

  - Renderize o componente `SolarSystem` abaixo do `Header`, dentro do componente principal `App`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o componente `<SolarSystem />` é renderizado.

  * Se há uma `div` que tem o `data-testid="solar-system"`.

  * Se o componente `<SolarSystem />` está sendo renderizado no componente principal `App`.
</details>

---

## 3. Crie um componente chamado `Title`

<details>
  <summary>Crie um componente chamado <code>Title</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `Title` deve receber uma prop `headline`.
    
  - Ele deve conter uma tag `h2`, que deve renderizar o texto recebido pela prop `headline`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o componente `<Title />` é renderizado.

  * Se o componente `<Title />` contém uma tag `h2`.

  * Se o componente `<Title />` renderiza o texto passado pela prop `headline` dentro de uma tag `h2`.
</details>

---

## 4. Renderize o componente `Title` dentro do componente `SolarSystem`

<details>
  <summary>Renderize o componente <code>Title</code> dentro do componente <code>SolarSystem</code>.</summary>

  - O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Planetas".

  ![Screenshot](/examples/req4.png)
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o texto "Planetas" é renderizado usando o componente `Title` dentro do componente `SolarSystem`.
</details>

---

## 5. Crie um componente chamado `PlanetCard`
<details>
  <summary>Crie um componente chamado <code>PlanetCard</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `PlanetCard` deve receber duas props: uma chamada `planetName` e outra, `planetImage`.
    
  - O componente `PlanetCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="planet-card"`.
    
  - O componente `PlanetCard` deve renderizar o texto recebido pela prop `planetName`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="planet-name"`.
    
  - O componente `PlanetCard` deve renderizar uma imagem que tenha o atributo `src` com o valor recebido pela prop `planetImage`.

  - Além do atributo `src`, a imagem renderizada deve ter o atributo `alt` com o texto `Planeta {planetName}`, em que `{planetName}` é o valor recebido pela prop `planetName`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o componente `<PlanetCard />` é renderizado.

  * Se o componente `<PlanetCard />` tem uma div com o atributo `data-testid="planet-card"`.

  * Se é renderizado o texto recebido pela prop `planetName`.

  * Se é renderizada uma imagem com o atributo `src` com o mesmo valor recebido pela prop `planetImage`.

  * Se, além do atributo `src`, a imagem renderizada tem o atributo `alt` com o texto `Planeta {planetName}`, em que `{planetName}` é o valor recebido pela prop `planetName`.
</details>

---

## 6. Renderize uma lista com os planetas do Sistema Solar

<details>
  <summary>Renderize uma lista com os planetas do Sistema Solar dentro do componente <code>SolarSystem</code>.</summary>

  - Utilize o componente `PlanetCard` para renderizar cada item da lista de planetas.

  - Você encontrará a lista com os nomes e as imagens de cada planeta do Sistema Solar no arquivo `src/data/planets.js`.
    
  - Você deve importar a lista no componente `SolarSystem` usando o código:
  ```javascript
  import planets from '../data/planets';
  ```

  - A lista de planetas é um _array_ de objetos no seguinte formato:
  ```javascript
  {
    name: "Nome do planeta",
    image: "caminho-para-imagem-do-planeta"
  }
  ```

  - Para cada planeta da lista, você deverá renderizar um componente `PlanetCard`, passando o atributo `name` para a prop `planetName` e o atributo `image` para a prop `planetImage`.

  ![Screenshot](/examples/req6.png)
</details>

<details>
  <summary>:bulb: Dica: </summary> 

  - Lembre-se do método que permite a você criar vários componentes iguais com base em valores presentes em um _array_. Lembre-se também de que, ao renderizar uma lista, você deve passar o atributo `key` para cada item. Ainda, você pode usar o nome do planeta como `key`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se é renderizado um componente `<PlanetCard />` para cada planeta da lista de planetas.

  * Se todos os planetas do Sistema Solar estão sendo listados na tela.
</details>

---

# Requisitos Bônus

## 7. Crie um componente chamado `Missions`

<details>
  <summary>Crie um componente chamado <code>Missions</code> dentro da pasta <code>src/components</code>.</summary>

  - Esse componente deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="missions"`.

  - Renderize o componente `Missions` abaixo do `SolarSystem`, dentro do componente principal `App`.
</details>

<details>
<summary><strong>O que será verificado</strong></summary><br />

  * Se o componente `<Missions />` é renderizado.

  * Se há uma `div` que tem o `data-testid="missions"`.

  * Se o componente `<Missions />` está sendo renderizado no componente principal `App`.
</details>

---

## 8. Renderize o componente `Title` dentro do componente `Missions`

<details>
  <summary>Renderize o componente <code>Title</code> dentro do componente <code>Missions</code>.</summary>

  - O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Missões".

  ![Screenshot](/examples/req8.png)
</details>
<details>
<summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o texto "Missões" é renderizado usando o componente `Title` dentro do componente `Missions`.
</details>

---

## 9. Crie um componente chamado `MissionCard`

<details>
  <summary>Crie um componente chamado <code>MissionCard</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `MissionCard` deve receber quatro props:
    - `name`
    - `year`
    - `country`
    - `destination`

  - O componente `MissionCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="mission-card"`.
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `name`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-name"`.
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `year`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-year"`.
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `country`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-country"`.
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `destination`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-destination"`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o componente `<MissionCard />` é renderizado.

  * Se o componente `<MissionCard />` tem uma div com o atributo `data-testid="mission-card"`.

  * Se é renderizado o texto recebido pela prop `name`.

  * Se é renderizado o texto recebido pela prop `year`.

  * Se é renderizado o texto recebido pela prop `country`.

  * Se é renderizado o texto recebido pela prop `destination`. 
</details>

---

## 10. Renderize uma lista com as missões espaciais

<details>
  <summary>Renderize uma lista com as missões espaciais dentro do componente <code>Missions</code>.</summary>

  - Utilize o componente `MissionCard` para renderizar cada item da lista de missões.

  - Você encontrará a lista com as informações de cada missão espacial no arquivo `src/data/missions.js`.

  - Você deve importar a lista no componente `Missions` usando o código:
  ```javascript
  import missions from '../data/missions';
  ```

  - A lista de missões espaciais é um _array_ de objetos no seguinte formato:
  ```javascript
  {
    name: 'Nome da missão',
    year: 'Ano de lançamento da missão',
    country: 'País que lançou a missão',
    destination: 'Destino da missão',
  }
  ```

  - Para cada missão espacial da lista, você deverá renderizar um componente `MissionCard`, passando cada atributo para a respectiva prop.

  <img src="/examples/req10.png" alt="Screenshot" width=528 />

</details>
<details>
<summary>:bulb: Dica:</summary>

  - Lembre-se do método que permite a você criar vários componentes iguais com base em valores presentes em um _array_. Lembre-se também de que, ao renderizar uma lista, você deve passar o atributo `key` para cada item. Ainda, você pode usar o nome da missão como `key`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se é renderizado um componente `<MissionCard />` para cada missão espacial da lista de missões.

  * Se todas as missões espaciais estão sendo listadas na tela.
</details>

---
