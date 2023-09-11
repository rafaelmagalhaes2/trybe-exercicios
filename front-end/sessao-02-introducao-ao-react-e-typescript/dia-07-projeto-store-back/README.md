# Boas-vindas ao repositório do exercício Store Back office!

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, envie-a por _Slack_! 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício, utilizando uma _branch_ específica e um _pull request_ (PR) para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu exercício você deverá criar um *Pull Request* neste repositório.
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Nesse exercício você irá desenvolver um _back office_ para uma loja. O _back office_ deve permitir que o usuário gerencie os produtos, cadastrando-os e excluindo-os.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste exercício, verificamos se você é capaz de:

- Ler o estado de um componente e usá-lo para alterar o que exibimos no _browser_;
- Inicializar um componente, dando a ele um estado predefinido;
- Atualizar o estado de um componente;
- Capturar eventos utilizando a sintaxe do React;
- Criar formulários utilizando sintaxe JSX com as _tags_: `input`, `textarea`, `select`, `form`, `checkbox`;
- Transmitir informações de componentes-filhos para componentes-pais via _callbacks_.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-034-exercise-store-back-office.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-034-exercise-store-back-office`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
    - Exemplo: `git checkout -b joaozinho-sd-034-exercise-store-back-office`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-034-exercise-store-back-office`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-034-exercise-store-back-office/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-034-exercise-store-back-office/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-034`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
  e de fácil manutenção! Para rodá-los localmente no exercício, execute os comandos abaixo:

  ```bash
    npm run lint
    npm run lint:styles
  ```

  ⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

  Em caso de dúvidas, confira o material do course sobre [ESLint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Para avaliar o exercício iremos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

  Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

  Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos `data-testid` em alguns elementos _HTML_. Vamos a um exemplo para deixar claro essa configuração:

  Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

  ```html
  <button data-testid="my-action"></button>
  ```
  
  ou

  ```html
  <a data-testid="my-action"></a>
  ```

  Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library (RTL) identificar o elemento e dessa forma, conseguiremos realizar testes focados no comportamento da aplicação.

  Em alguns requisitos, utilizamos o `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

  Afim de verificar a solução proposta, você pode executar todos os testes localmente, basta executar:

  ```bash
  npm test
  ```

  ### Dica: desativando testes

  Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste. Veja um exemplo:

  ```js
  it.skip("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });
  ```

  ![image](skip-image.png)

  Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

  Você também pode rodar apenas um arquivo de teste, por exemplo:

  ```bash
  npm test 01
  ```

  Uma outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ```js
  it.only("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });
  ```

  ![image](only-image.png)

  ⚠️ **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**
</details>

<details>
  <summary><strong>:information_source: Informações Adicionais </strong></summary><br />

  ### Criando, lendo, atualizando e apagando informações

  Quando estamos lidando com informações, temos 4 operações principais: __Create__ (criar), __Read__ (ler), __Update__ (atualizar) e __Delete__ (apagar). Com essas quatro operações, formamos o acrônimo CRUD. Esse acrônimo é um termo que será bastante utilizado na sua jornada como pessoa desenvolvedora.

  Nesse exercício vamos começar a lidar um pouco mais com essas operações, mas faremos todas elas. Você precisará criar, ler e apagar informações, mas não precisará desenvolver a função de editar. Na Trybe teremos diversos outros projetos e exercícios para você treinar a implementação de todas essas operações.
</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.
</details>

---

# Requisitos

## 1. Renderize apenas um dos componentes no `App` por vez.

<details>
<summary>Apenas um dos componentes deverá ser visível por vez</summary><br />

  Para isso, crie um estado no componente `App` para controlar qual componente será renderizado.
  
  - Adicione eventos para os botões `Cadastrar` e `Ver produtos`, alterando o estado do componente `App` que controla qual componente será renderizado;
  - Utilize renderização condicional para exibir apenas um dos componentes por vez:
    - Caso o usuário clique no botão "Cadastrar", o componente `RegisterProduct` deverá ser renderizado;
    - Caso o usuário clique no botão "Ver produtos", o componente `ListProducts` deverá ser renderizado.
</details>

<details>
<summary><strong>O que será verificado:</strong></summary><br />

  - Se, ao clicar no botão "Cadastrar", o componente `RegisterProduct` é renderizado, e o componente `ListProducts` não é renderizado.
  - Se, ao clicar no botão "Ver produtos", o componente `ListProducts` é renderizado, e o componente `RegisterProduct` não é renderizado.
</details>

## 2. Exiba o _preview_ das informações enquanto o usuário cadastra um novo produto.

<details>
<summary>As informações do produto devem ser exibidas no componente <code>Product</code> do formulário</summary><br />

  - Adicione eventos aos campos do formulário e armazene suas informações no estado do componente `RegisterProduct`;
  - Passe as informações do formulário para o componente `Product` através da _prop_ `productInfo`:
> **De olho na dica 👀**: O `Product` se encontra comentado no final do componente `RegisterProduct`.
  
  - A prop `productInfo` deverá ser um objeto com as seguintes chaves:

    ```json
    { 
      name: "Nome do produto",
      price: 100,
      description: "Descrição do produto",
      tags: "tag1, tag2, tag3",
      image: "https://url-da-imagem" 
    }
    ```

> **Observação 🔎**: Sinta-se a vontade para modificar o formato do objeto, mas lembre-se de atualizar o que for necessário para que os componentes continuem funcionando corretamente.

> **De olho na dica 👀**: Note que o _value_ do _input_ de preço sempre será uma _string_ (mesmo com o `type="number"`). Caso você queira trabalhar com valores numéricos, converta a _string_ para um número ou utilize o atributo `.valueAsNumber` do _input_.

</details>

<details>
<summary><strong>O que será verificado:</strong></summary><br />

- Se, ao preencher o formulário, o _preview_ do produto deverá ser atualizado com as informações inseridas.

</details>

## 3. Implemente a funcionalidade de cadastrar um novo produto.

<details>
<summary>O botão "Salvar" do componente <code>RegisterProduct</code> deve adicionar um novo produto à lista de produtos</summary><br />

  - Implemente a função `onSubmit` presente no formulário de cadastro de produtos. Essa função deverá:
    - Chamar a função `handleSubmit` recebida por _props_;
    - Limpar o formulário.

  - Implemente a função `handleSubmit` que o componente `RegisteProduct` deve receber por _props_. A função deverá:
    - Criar um `id` único para o produto;
    - Armazenar as informações do produto (com o ID) em um estado do componente `App` dentro de um _array_;
  
  > **De olho na dica 👀**: O `id` pode ser qualquer valor único, desde um número que sempre será incrementado, ou até mesmo um `date.now()`.

  > **Observação 🔎**: Note que estamos salvando os produtos no `App` porque, dessa forma, podemos compartilhar as informações entre os componentes `RegisterProduct` e `ListProducts` 😉
  
  > **Atenção ⚠️**: Lembre-se de alterar as tipagens sempre que necessário.
</details>

<details>
<summary><strong>O que será verificado:</strong></summary><br />

  - Se, ao clicar no botão `Salvar`, o formulário é limpo.

</details>

## 4. Exiba a lista de produtos cadastrados ao clicar no botão "Ver produtos".

<details>
<summary>Os produtos cadastrados devem ser exibidos no componente <code>ListProducts</code></summary><br />

  - Passe as informações do estado do componente `App` para o componente `ListProducts` através da _prop_ `products`.

</details>

<details>
<summary>Implemente a função <code>handleDelete</code> que o componente <code>ListProducts</code> deve receber por _props_</summary><br />

A função `handleDelete` será responsável por remover um produto da lista de produtos. Ela é chamada quando o usuário clica no botão "X" de um produto (só será exibido quando o componente ListProducts receber a prop `handleDelete`).

  - Implemente a função `handleDelete` que o componente `ListProducts` deve receber por _props_. A função deverá:
    - Remover o produto clicado do estado do componente `App`.

> **Atenção ⚠️**: Lembre-se de alterar as tipagens sempre que necessário.

> **Observação 🔎**: Você pode implementar da forma que achar melhor e modificar o código já existente para isso.

</details>

<details>
<summary><strong>O que será verificado:</strong></summary><br />

  - Se, ao adicionar um produto e clicar no botão "Ver produtos", a lista de produtos cadastrados é exibida;
  - Se, ao clicar no botão "X" de um produto, o produto é removido da lista.

</details>

# Exercício extra 

- **Observação 🔎**: Esse exercício não é testado pelo avaliador.

## 5. Implemente um novo campo no formulário de cadastro de produtos.

<details>
<summary>Sugestão de novo campo</summary>

  - Adicione um campo para dizer se o produto possui frete grátis ou não, e exiba essa informação no _preview_ e na lista de produtos.

</details>

## 6. Implemente o CSS.

<details>
<summary>Figma para auxilio</summary>

  Caso queira implementar o CSS, você pode utilizar o Figma abaixo como base para desenvolver seu _layout_:

  - [Figma](https://www.figma.com/file/hMBD8eXM1vxJXBIH1q0MRO/Untitled?node-id=0%3A1&t=RquvQZOGVyddmiC3-1)

</details>
