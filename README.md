# Pokemon Store

- <a href="#introduction">Introdução</a>
- <a href="#objective">Objetivo</a>
- <a href="#challenge">Desafio</a>
- <a href="#solutions">Soluções</a>
- <a href="#tecnologies">Tecnologias</a>
- <a href="#the-store">A Loja</a>
- <a href="#init-project">Iniciar Projeto</a>
- <a href="#start-project">Startar Projeto</a>
- <a href="#storybook">Storybook</a>
- <a href="#test">Testes</a>
- <a href="#pipeline">Pipeline</a>
- <a href="#memo-licença">Licença</a>

## Introduction

Pokemon Store é um projeto que gera uma loja pokemon do tipo que você quiser.

Para isso é preciso cadastrar as cores do thema, referene ao tipo e hospedar
definindo a variavel de ambiente como o tipo desejado.

O projeto já possui 4 tipos pré definido, Fire, Water, Grass e Dragon.

## Objective

O objetivo do projeto era de criar 3 lojas pokemons com o mesmo comportamento. A
loja possuiria, pagina de catalogo, pagina de produto, o cart e uma busca.

## The Store

- <a href="https://pokemon-store-fire.herokuapp.com/">Main</a>
- <a href="https://pokemon-store-fire.herokuapp.com/catalog">Fire</a>
- <a href="https://pokemon-store-water.herokuapp.com/catalog">Water</a>
- <a href="https://pokemon-store-dragon.herokuapp.com/catalog">Dragon</a>
- <a href="https://pokemon-store-grass.herokuapp.com/catalog">Grass</a>

<img src='./assets/store-fire.jpeg' width='25%' alt='fire'/>
<img src='./assets/store-water.jpeg' width='25%' alt='water'/>
<img src='./assets/store-dragon.jpeg' width='25%' alt='dragon'/>
<img src='./assets/store-grass.jpeg' width='25%' alt='grass'/>

O projeto foi todo criado como mobile-first, com um layout bem descontraído, cada
tema possuim um conjunto de cores primarias, secundarias e tercearias, black, white
gray, error, success, na sua maioria com tons de dark e light. Tambem possuem
cores pré definidas de text, background, para que as cores não se sobreponham,
independente do tema.

Todas as lojas posstuim a mesma pagina main, a main não possuim tema, ela é
responsavel apenas por lista todas as lojas e disponibilizar link para a pagina de
catalogo das mesmas.

<img src='./assets/main.jpeg' width='50%' alt='main'/>

A pagina de catalogo lista todos os pokemon disponivei na api [pokeapi.co](https://pokeapi.co/)
e as imagems dos pokemon vieram da api [pokeres.bastionbot.org](https://pokeres.bastionbot.org/) onde eu só precisava passar a url com o numero do pokemon .png para conseguir a
imagem dele. Ex.: https://pokeres.bastionbot.org/images/pokemon/25.png.

<img src='https://pokeres.bastionbot.org/images/pokemon/25.png' alt='pikachu' width='50%' />

Nos casos em que a api não possuia a imagem eu inseri no fallback de erro no img e
inseri a imagem do pokemon MissingNo. que é um pokemon bugado, uma solução engraçada para
para um problema que existia.

<img src='./public/images/missingno.png' alt='missingno' width='30%' />

No final da pagina de catalogo ele possuim uma paginação bem simples onde ele exibe de 10
em 10 pokemon.

Um ponto a ser comentado é que a requisição a api é feita apenas uma vez, e a lista é
guardada no localstorage, uma nova requisição só é feita caso essa lista seja perdida.

Tanto a persistencia do carrinho quanto o da lista é separada por tema.

<img src='./assets/empty-cart.jpeg' alt='empty cart' width='50%' />
<img src='./assets/cart.jpeg' alt='cart' width='50%' />

O cart pode ser acessado tando da pagina de catalogo quanto da pagina de produto,
o botão fica disponivel no header da pagina. É possivel excluir produtos do cart e
ao finalizar a comprar o comportamento é de fechar o cart, limpar o mesmo e
exibir uma modal de agradecimento com 10% de cashback com base no valor total.

<img src='./assets/modal.jpeg' alt='modal' width='50%' />

O search é bem simples, ele realiza um filter das lista do catalogo e compara o valor
do input com o nome do pokemon, utilizei uma regex bem simples pra isso, com isso ele
retorna um nova lista que é passada para o componete que exibi o filtro.

Toda vez que você atualiza a lista do cart ele mostra uma notificação com a
foto e o nome do ultimo pokemon que foi adicionado.

<img src='./assets/minicart.jpeg' alt='minicart' width='100%' />

Na pagina de produto, no mobile ele possui o button e o price fixados a base
na pagina, assim é possivel adicionar ao carrinho a qualquer momento, mesmo que
tenha realizado um scroll, o mesmo acontece no desk, porem toda a barra da direita
acompanha o scroll, mantendo sempre em vista o price e o button addToCart.

<img src='./assets/product.jpeg' alt='product' width='50%' />

## Challenge

O desafio principal desse projeto foi de criar any pokemon stories com apenas um
codigo de manutenção.

## Solutions

Para manter apenas um codigo para as diversas lojas, o projeto todo se baseou no
tema que era definido por uma variavel de ambiente chamada REACT_APP_TYPE.

O tema era um conjunto de variaveis com suas cores definidas para cada tipo Pokemon.

Como o price era gerado de forma randomica, uma solução que eu dei, para manter
o mesmo valor exibido com o valor que estava no carrinho, foi de persistir tambem
a pagina de catalogo, assim alem dele não precisar fazer requisição na api toda vez
ele eu saberia que o price é o mesmo, já que seriam duas listas diferentes. Caso
a lista do catalogo fosse atualizada, a persistencia do carrinho é perdida, pois já
não teria como ter os mesmos valores.

## Tecnologies

- ReactJS
- Redux
- Prop Types
- React Router Dom
- React Icons
- Axios
- Styled Components
- Styled Theming
- Uuidv4
- Storybook
- Eslint
- Prettier

## Init Project

Para iniciar o projeto execute o comando `yarn` ou `npm i` na raiz do projeto.

## Start Project

Para rodar o projeto execute o comando `yarn dev` ou `npm run dev` na raiz do projeto.

## Storybook

O Storybook é responsavel pela documentação, exibição e testes dos componentes do projeto.

No processo de desenvolvimento, o storybook é essencial no desenvolvimento de componentes,
ele ajuda no isolamento e na compreenção do escopo. E possivel configurar um playground
para cada componente e ele tambem utiliza das proptypes para documentar as propriedades.

### Componente

<img src='./assets/component.jpeg' width='70%' alt='component'/>
<br/><br/>

### Playground

<img src='./assets/playground.jpeg' width='50%' alt='playground'/>
<br/><br/>

### Documentação

<img src='./assets/docs.jpeg' width='70%' alt='docs'/>
<br/><br/>

## Start

Para rodar os stories execute o comando `yarn storybook` ou `npm run storybook` na raiz do projeto.

## Test

Realizei testes de renderização apenas dos atomos. Não tenho muita pratica com
testes porem entendo a importancia deles.

Para rodar os testes execute o comando `yarn test` ou `npm run test` na raiz do projeto.

Está configurado para exibir o coverage

## Pipeline

Foi criado um pipeline para uma rapida atualização de todos os projetos, já que ele possuim um mesmo codigo base. Basicamente, toda vez que a master é atualiza, o pipeline é executado,
atualizando todos os sites com a ultima versão do projeto.

<img src='./assets/pipeline.jpeg' width='70%' alt='pipeline'/>
<br/><br/>
<img src='./assets/build.jpeg' width='50%' alt='build'/>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
