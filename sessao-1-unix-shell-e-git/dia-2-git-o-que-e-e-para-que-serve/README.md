#Dia 2 - Exercícios - criando um repositório

## Versionamento

Passo a passo de como o versionamento funciona!

Antes de mais nada, crie sua pasta onde o projeto versionado irá ficar...

    ex: mkdir projeto

Agora acesse o diretório criado.

    ex: cd projeto/

Dentro da pasta criada, já com o terminal aberto adicione o git ao diretório.

    ex: git init

Por default, o git inicia com a branch main, através da branch main podemos criar
novas branchs para trabalhar mais tranquilos. Lembrando que não é recomendado traba-
lhar diretamente na branch main. Para criar uma branch nova e já acessá-la, digite
o comando abaixo no terminal.

    ex: git checkout -b adiciona-arquivo

Automaticamente é criado uma cópia da branch main na branch adiciona-arquivo. Agora 
podemos alterar nossos código sem se preocupar com o código origial na main.

Agora podemos começar a criar. Para criar um arquivo utilize o comando touch <arquivo>.

    ex: touch arquivo.txt

Para acompanhar as mudanças em nosso diretório de arquivos usamos o comando git status.

    ex: git status

O comando git status mostra se o nosso arquivo se encontra monitorado ou não, caso o arquivo apareça com a cor vermelha, o arquivo está fora da área de staging, ou seja, não está monitorado. Para adicionar o arquivo na área de staging usamos o comando git add . ou git add <nome do arquivo>, assim adicionamos o arquivo para área de staging em monitoramento.

    ex: git add . || git add arquivo.txt

Ao usar o git status novamente é possível ver que as letras mudaram de cor para verde. Nesse 
momento podemos fazer o commit, que se tornará uma versão do nosso arquivo.

    ex: git commit -m 'Meu primeiro commit, arquivo.txt criado com sucesso!'

Ao realizar um commit, estamos criando uma versão do nosso arquivo, que pode ser acessado
ao longo do projeto.

Após realizar todas as mudanças e verificar se está tudo ok, é hora de mesclar nossa branch atual á nossa branch main.

Para fazer isso precisamos acessar nossa branch main usando o comando abaixo. Uma boa prática é sempre checkar em qual branch você está, usando o comando git branch.

    ex: git branch -> lista todas branchs do projeto e coloca um * na frente da branch atual.

    ex: git checkout main -> muda para a branch main

Após mudar para branch main, e checar com o git branch para confirmar, é hora de dar um merge!
Para dar um merge(mesclar as branchs), podemos usar o comando abaixo.

    ex: git merge adiciona-arquivo

Após realizar o merge, todos as mudanças feitas na branch adiciona-arquivo é mesclada na branch main.

É importante criar uma branch apartir da principal, para não haver erros no processo, e sempre ter uma cópia do seu projeto em segurança.

