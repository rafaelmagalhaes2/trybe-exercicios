# Boas-vindas ao repositório do projeto Gerenciador de Senhas!

Para realizar o projeto, atente a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento de seu projeto com base neste repositório utilizando uma branch específica e um Pull Request (PR) para colocar seus códigos.

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar seu projeto, você deverá criar um Pull Request neste repositório.
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto, você vai desenvolver um gerenciador de senhas. Ao utilizar essa aplicação, uma pessoa usuária deverá ser capaz de:

  - Cadastrar senhas para serviços que ela utiliza na internet.

  - Visualizar as próprias senhas cadastradas e as informações do serviço utilizado.

  - Esconder as senhas salvas.

  - Remover os dados armazenados anteriormente.

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, verificamos se você é capaz de:

  - Ler o estado de um componente e utilizá-lo para alterar o que é exibido na tela.

  - Atualizar o estado de um componente.

  - Listar componentes de maneira dinâmica.

  - Criar formulários.

  - Renderizar componentes de maneira condicional.

  - Transmitir informações entre componentes por meio de _props_.

  - Transmitir informações de componentes-filhos para componentes-pais via callbacks.
</details>

<details>
  <summary><strong>🗓 Data de entrega</strong></summary><br />
  
  * Este projeto é individual.
  * Serão `2` dias de projeto.
  * Data para entrega final do projeto: `24/08/2023 23:59`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-034-project-password-manager.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-034-project-password-manager`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique se você está na branch `master`.
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`.
    - Exemplo: `git checkout master`
  - Agora, crie uma branch à qual você vai submeter os `commits` de seu projeto.
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`.
    - Exemplo: `git checkout -b joaozinho-sd-034-project-password-manager`

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

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-034-project-password-manager`

  6. Crie um `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-034-project-password-manager/pulls).
  - Clique no botão verde _"New pull request"_.
  - Clique na caixa de seleção _"Compare"_ e escolha sua branch **com atenção**.
  - Dê um título à sua _Pull Request_.
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_.
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_.
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-034-project-password-manager/pulls) e confira se seu _Pull Request_ está criado.

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

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, utilize neste projeto os linters `ESLint` e `StyleLint`. Assim, o código estará alinhado com as boas práticas de desenvolvimento, além de ser mais legível e de fácil manutenção. Para rodá-los localmente no projeto, execute os comandos a seguir.

  ```bash
    npm run lint
    npm run lint:styles
  ```

  ⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. RESOLVA-AS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

  Em caso de dúvidas, confira o material do course sobre [ESLint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Para avaliar o projeto, será utilizada a [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para a execução dos testes.

  Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, e uma dessas marcações é o atributo `data-testid`, que será utilizado aqui.

  Na descrição dos requisitos a seguir, será pedida que seja feita a adição de atributos `data-testid` a alguns elementos _HTML_. Observe este exemplo para esclarecer essa configuração:

  Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você poderá criar:

  ```html
  <button data-testid="my-action"></button>
  ```
  
  ou

  ```html
  <a data-testid="my-action"></a>
  ```

  Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library (RTL) identificar o elemento e, dessa forma, ser possível realizar testes focados no comportamento da aplicação.

  Em alguns requisitos, utilize o `getByRole` para poder selecionar os elementos de modo semântico. Portanto, atente às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

  A fim de verificar a solução proposta, você pode executar todos os testes localmente. Para isso, basta executar:

  ```bash
  npm test
  ```

  ### Dica: desativando testes

  Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, essa função "pula" um teste. Observe este exemplo:

  ```js
  it.skip("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });
  ```

  ![image](skip-image.png)

  Duas estratégias são pular todos os testes no início e implementar um teste de cada vez, removendo dele a função `skip`.

  Você também pode rodar apenas um arquivo de teste. Por exemplo:

  ```bash
  npm test 01
  ```

  Outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ```js
  it.only("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });
  ```

  ![image](only-image.png)

  ⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**
</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Neste projeto, você deverá desenvolver uma aplicação em React para gerenciar senhas. Nele, você vai implementar um formulário para cadastrar as informações de acesso de serviços que você usa na internet. Por exemplo, será possível cadastrar os dados de login e senha utilizados para você acessar o provedor de e-mails que utiliza diariamente.
  
  Deverá ser possível adicionar os dados de vários serviços diferentes. Além disso, você deverá implementar uma funcionalidade para esconder e/ou mostrar todas as senhas cadastradas.

  O formulário deverá ser renderizado de maneira condicional. Ou seja, ele apenas será renderizado após a pessoa usuária clicar no botão para adicionar uma nova senha.
</details>

<details>
  <summary><strong>:information_source: Informações adicionais </strong></summary><br />

  ### Criando, lendo, atualizando e apagando informações

  Quando você estiver lidando com informações, há quatro operações principais: __Create__ (criar), __Read__ (ler), __Update__ (atualizar) e __Delete__ (apagar). Com essas quatro operações, forma-se o acrônimo CRUD. Esse acrônimo é um termo que será bastante utilizado em sua jornada como pessoa desenvolvedora.

  Neste projeto, você vai começar a lidar um pouco mais com essas operações, mas todas elas serão feitas. Você precisará criar, ler e apagar informações, mas não precisará desenvolver a função de editar. Na Trybe, há diversos projetos e exercícios para você treinar a implementação de todas essas operações.
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

  Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.

  **Leva menos de 3 minutos!**

  [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH34&template=betrybe/sd-0x-project-password-manager)
</details>

<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

Você pode estar se perguntando: *"Como deixo meu projeto com um layout mais atrativo?"* 🤔

Para isso, disponibilizamos este [protótipo do Figma](https://www.figma.com/file/DZGxIb6HBGBGzqCw1G1Nu6/%5BProject%5D%5BFrontend%5D-Password-Manager?node-id=0%3A1&t=v6gvpgpkGHt3yMeQ-1) para lhe ajudar!

⚠️ A estilização de sua aplicação não será avaliada neste projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo de seu jeito.

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar seu aprendizado nela é muito importante caso deseje construir uma carreira de sucesso? Compartilhe esse projeto em seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre à sua rede toda a sua evolução.
</details>

---

# Requisitos

## 1 - Crie um título para a aplicação

Adicione um título à sua aplicação.

- O título deve estar em uma _tag_ `<h1>`.
- O título deve conter o texto `Gerenciador de senhas`.
- Você pode escolher onde colocar o título, mas ele deve estar dentro do componente `App`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A aplicação renderiza uma tag h1 contendo o texto "Gerenciador de senhas".

</details>

---

## 2 - Crie um componente Form

Crie um componente chamado `Form`.

Esse componente deve ser renderizado no `<App>` e deve possuir:

- Um _input_ do tipo _text_ com o texto `Nome do serviço` como label.
- Um _input_ do tipo _text_ com o texto `Login` como label.
- Um _input_ do tipo _password_ com o texto `Senha` como label.
- Um _input_ do tipo _text_ com o texto `URL` como label.
- Um _button_ com o texto `Cadastrar`.
- Um _button_ com o texto `Cancelar`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - O componente `Form` tem um input associado a uma label com o texto "Nome do serviço".
  - O componente `Form` tem um input associado a uma label com o texto "Login".
  - O componente `Form` tem um input associado a uma label com o texto "Senha".
  - O componente `Form` tem um input associado a uma label com o texto "URL".
  - O componente `Form` tem um botão com texto "Cadastrar".
  - O componente `Form` tem um botão com o texto "Cancelar".

</details>

---

## 3 - Renderize condicionalmente o formulário

- Renderize um botão com o texto "Cadastrar nova senha"

Inicialmente a aplicação deverá exibir apenas o botão com o texto "Cadastrar nova senha".

- Ao clicar no botão "Cadastrar nova senha":
  - ele deverá desaparecer;
  - o componente `<Form />` deverá ser renderizado.
- Ao clicar no botão do formulário com o texto `Cancelar`:
  - o formulário deverá desaparecer.
  - o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A aplicação renderiza o botão "Cadastrar nova senha".
  - Ao clicar no botão "Cadastrar nova senha", ele deverá desaparecer.
  - Ao clicar no botão "Cadastrar nova senha", o formulário deverá ser renderizado.
  - Ao clicar no botão "Cancelar" do formulário, o formulário deverá desaparecer.
  - Ao clicar no botão "Cancelar" do formulário, o botão "Cadastrar nova senha" deverá aparecer.

</details>

---

## 4 - Valide os campos do formulário

O botão `Cadastrar` do formulário só poderá estar habilitado caso todas as verificações a seguir sejam atendidas.

- O input com o "nome do serviço" deve estar preenchido.
- O input com o "login" deve estar preenchido.
- O input com a "senha" deve estar preenchido.
  - A senha deve ter no mínimo 8 caracteres.
  - A senha deve ter no máximo 16 caracteres.
  - A senha deve ter letras e números.
  - A senha deve ter algum caractere especial.

Caso alguma das verificações acima não seja atendida, o botão `Cadastrar` deverá estar desabilitado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - O botão "Cadastrar" deve estar desabilitado se nenhum campo do formulário for preenchido.
  - O botão "Cadastrar" deve estar desabilitado caso o campo "Nome do serviço" não esteja preenchido.
  - O botão deve estar desabilitado caso o campo "Login" não esteja preenchido.
  - O botão deve estar desabilitado caso a senha tenha menos de 8 caracteres.
  - O botão deve estar desabilitado caso a senha tenha mais de 16 caracteres.
  - O botão deve estar desabilitado caso a senha não contenha números.
  - O botão deve estar desabilitado caso a senha não contenha letras.
  - O botão deve estar desabilitado caso a senha não contenha caracteres especiais.
  - O botão deve estar habilitado caso todos os campos estejam preenchidos corretamente.

</details>

---

## 5 - Crie um display para a validação da senha

Quando o formulário for renderizado, as seguintes mensagens também deverão ser renderizadas na tela:

- "Possuir 8 ou mais caracteres".
- "Possuir até 16 caracteres".
- "Possuir letras e números".
- "Possuir algum caractere especial".

Os elementos podem ser renderizados em qualquer lugar da página, com qualquer tag html, desde que estejam visíveis.

Para cada mensagem, você deverá verificar se o que está sendo digitado no _input_ com a label `Senha` atende à respectiva verificação. Caso a verificação seja atendida, o elemento com o texto deverá receber o atributo `className="valid-password-check"`. Caso contrário, o elemento que contém o texto deverá receber o atributo `className="invalid-password-check"`.

Por exemplo, caso a senha digitada seja "@Senha", os elementos deverão apresentar as seguintes classes:

- "Possuir 8 ou mais caracteres": `invalid-password-check`.
- "Possuir até 16 caracteres": `valid-password-check`.
- "Possuir letras e números": `invalid-password-check`.
- "Possuir algum caractere especial": `valid-password-check`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Renderiza a mensagem "Possuir 8 ou mais caracteres" com a classe "valid-password-check" caso a senha tenha 8 ou mais caracteres.
  - Renderiza a mensagem "Possuir 8 ou mais caracteres" com a classe "invalid-password-check" caso a senha tenha menos de 8 caracteres.
  - Renderiza a mensagem "Possuir até 16 caracteres" com a classe "valid-password-check" caso a senha tenha 16 caracteres ou menos.
  - Renderiza a mensagem "Possuir até 16 caracteres" com a classe "invalid-password-check" caso a senha tenha mais de 16 caracteres.
  - Renderiza a mensagem "Possuir letras e números" com a classe "valid-password-check" caso a senha tenha letras e números.
  - Renderiza a mensagem "Possuir letras e números" com a classe "invalid-password-check" caso a senha não tenha letras e números.
  - Renderiza a mensagem "Possuir algum caractere especial" com a classe "valid-password-check" caso a senha tenha caractere especial.
  - Renderiza a mensagem "Possuir algum caractere especial" com a classe "invalid-password-check" caso a senha não tenha caractere especial.

</details>

---

## 6 - Implemente a função do botão "Cadastrar" do formulário

Implemente a função "Cadastrar" do formulário, de modo que a aplicação liste todos os serviços cadastrados.

- Se nenhum serviço estiver cadastrado, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada na tela.
- Ao clicar no botão "Cadastrar" do formulário, as informações do serviço deverão ser renderizadas da seguinte forma:
  - O `Nome do serviço` deverá ser renderizado dentro de um `link` que, quando clicado, deverá direcionar a pessoa usuária para a `URL` cadastrada.
  - O `Login` cadastrado deverá ser renderizado.
  - A `Senha` cadastrada deverá ser renderizada e estar visível.
- Deve ser possível cadastrar mais de um serviço.
- Ao cadastrar um novo serviço, este deve aparecer ao final da lista.
- Após cadastrar um novo serviço:
  - O formulário deverá desaparecer.
  - O botão com o texto "Cadastrar nova senha" deverá ser renderizado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Caso não exista nenhum serviço cadastrado, a mensagem "nenhuma senha cadastrada" deverá ser renderizada.
  - Ao clicar no botão, as informações enviadas pelo formulário deverão ser renderizadas na tela.
  - A aplicação deve renderizar todos os serviços cadastrados na ordem esperada.
  - Se algum serviço estiver cadastrado, a mensagem "nenhuma senha cadastrada" deverá desaparecer.
  - Se após cadastrar um serviço o botão com o texto "Cadastrar nova senha" volta a ser exibido.

</details>

---

## 7 - Permita apagar um serviço cadastrado

Para cada serviço cadastrado, adicione um botão que, ao ser clicado, remove da lista o serviço correspondente. Esse botão deve ter o atributo `data-testid="remove-btn"`.

Caso todos os serviços cadastrados sejam removidos, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Cada serviço cadastrado deverá ter um botão com o atributo data-testid="remove-btn".
  - Ao clicar no botão, o serviço correspondente deve ser removido.
  - Se todos os serviços forem removidos, a mensagem "nenhuma senha cadastrada" deve ser renderizada.

</details>

---

## 8 - Implemente um checkbox para esconder/mostrar as senhas

A aplicação deve renderizar um input do tipo checkbox e que tenha uma label com o texto "Esconder senhas". Esse checkbox deve começar desmarcado.

- Com o checkbox desmarcado, todas as senhas cadastradas devem estar visíveis.
- Com o checkbox marcado, todas as senhas cadastradas devem estar "escondidas", renderizando exatamente o seguinte texto: `******`.

O checkbox pode ser implementado em qualquer lugar da aplicação.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A aplicação deve ter um input do tipo checkbox com o texto "Esconder senhas" como label e começar desmarcado.
  - Com o checkbox marcado, todas as senhas cadastradas deverão ser substituídas por `******`.
  - Ao clicar para desmarcar o checkbox, todas as senhas cadastradas devem voltar a aparecer.

</details>

# Requisitos bônus

## 9 - No formulário, implemente um botão para esconder/mostrar a senha que está sendo digitada

Crie outro botão no formulário:

- Adicione o atributo `data-testid="show-hide-form-password"`.
- Ao ser clicado, o _input_ com a label `Senha` deverá ter seu tipo alterado de _"password"_ para _"text"_, de modo que a senha fique visível.
- Ao ser clicado, caso o _input_ esteja com o tipo _"text"_, seu tipo deve ser alterado para _"password_, de modo que a senha fique escondida.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - O formulário deve ter um botão que contenha o atributo data-testid="show-hide-form-password".
  - Ao clicar no botão, o input correspondente à senha deverá ter seu tipo alterado para "text".
  - Se o input de senha estiver com o tipo "text", ao clicar no botão, seu tipo deverá ser alterado para "password".

</details>

## 10 - Exibe um alerta ao cadastrar um novo serviço corretamente

Ao clicar no botão "Cadastrar" do formulário, utilize a biblioteca [sweetalert2](https://sweetalert2.github.io/) para mostrar um alerta que informe à pessoa usuária que um novo serviço foi cadastrado.

O alerta deverá:
  - Desaparecer após 1500ms (1.5 segundo).
  - Mostrar a mensagem "Serviço cadastrado com sucesso".

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Ao cadastrar uma senha, exibe um "sweet alert" com o texto "Serviço cadastrado com sucesso".
  - Após clicar no botão, o alerta deve permanecer na tela por apenas 1.5s.

</details>
