
# Projeto <b>Trybe Futebol Clube</b>!

## Introdução (Intro)

`English translation at the bottom of every section.`

O projeto Trybe Futebol Clube foi desenvolvido durante o módulo Backend do curso de Desenvolvimento Web da Trybe. O projeto mais desafiador da Trybe até o momento, o TFC nos exigiu todo o conhecimento adquirido em backend até então, além de ter sido o primeiro projeto onde apliquei TDD. O projeto consiste em um frontend com uma interface para exibir informações sobre um campeonato de futebol. Nossa tarefa foi criar o backend que serviria a API que o frontend consultaria para recuperar todas as informações do campeonato, como times, jogos e classificações.

<details>
 <summary>English translation</summary>
The Trybe Football Club project was developed during the Backend module on Trybe's Web Development course. Trybe's most challenging project to date, the TFC required all the backend knowledge acquired so far, besides being the first project where I applied TDD. The project consists of a frontend with an interface to display information about a football championship. Our task was to create the backend that would serve the API which the frontend would use to retrieve all the championship information, such as teams, games and leaderboards.
</details>

---

## Habilidades desenvolvidas (Developed skills)

Neste projeto nós: desenvolvemos endpoints que se conectam com o banco de dados seguindo o REST; Seguimos a arquitetura MSC para o intermédio da chamada a API e a conexão com o Banco de Dados; Validamos o login de usuários através de nome e senha, utilizando JWT e BCrypt; Trabalhamos com tabelas de diferentes relações; Utilizamos o ORM Sequelize para intermediar a conexão do código Node.js com o banco de dados MySQL; Utilizamos TypeScript e classes para a construção da aplicação. Decidi por conta própria, também, aplicar TDD em boa parte do projeto.

<details>
 <summary>English translation</summary>
In this project we: developed endpoints that connect themselves with the database following the REST architecture; Followed the MSC architecture to intermediate the API call and the DB connection; Validated user login through username and password, making use of JWT; Worked with different relations on the relational database; Used Sequelize ORM to intermediate the Node.js and MySQL connection; Used TypeScript and classes to build the application. I've also decided, by my own, to apply TDD in a good part of the project.
</details>

---

## TDD

O **desenvolvimento orientado a testes** é um processo de desenvolvimento baseado em requisitos de software sendo convertidos em casos de teste antes que o software seja totalmente desenvolvido e rastreando todo o desenvolvimento do mesmo testando-o repetidamente em relação a todos os casos de teste.

<details>
 <summary>English translation</summary>
Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.
</details>

---

## CRUD

CRUD são as quatro operações básicas utilizadas em bases de dados relacionais fornecidas aos utilizadores do sistema. É um acrônimo para **C**reate, **R**ead, **U**pdate and **D**elete (em português seria **Criar**, **Ler**, **Atualizar** e **Deletar**), que definem as operações feitas no banco de dados, de criar novos dados, ler dados já presentes no banco, atualizar dados previamente adicionados ao banco, e deletar estes mesmos dados.

<details>
 <summary>English translation</summary>
CRUD are the four basic operations used on relational databases provided to the system users. CRUD stands for Create, Read, Update and Delete, which define the operations of creating new data, reading data already registered on the DB, updating data also already registered and deleting that same data.
</details>

---

## MSC

MSC são camadas que facilitam a manutenção e legibilidade no código, uma vez que cada camada é responsável por apenas uma função. A sigla MSC signfica **M**odel, **S**ervice e **C**ontroller, onde a camada **Controller** é a responsável por enviar as requisições do usuário para o servidor e retornar as respostas de nossa API para o usuário, enquanto que a camada **Model** acessa o banco de dados, executando a operação desejada. Já o **Service** é responsável por fazer a intermediação entre as duas camadas, podendo agir como regulador das regras de negócio da aplicação e lançar erros em caso de algum problema na execução do código.

<details>
 <summary>English translation</summary>
MSC are the layers that eases the maintenance and legibility of the code, once each layer is responsable for a single function. MSC stands for Model, Service and Controller, where each Controller layer is responsible for sending the requests from the user to the server, and the responses from our API to the user, while the Model layer acesses the database, executing the wanted operation. The Service layer, on the other hand,  is responsible for intermediate both the previous layers, acting as a regulator of the business rules on our app, throwing errors, etc.
</details>

---

## ORM

Os ORMs ou **O**bject-**R**elational **M**appers visam diminuir o uso dos comandos e consultas SQL nas tabelas do banco de dados. Utilizando um framework baseado em ORM, conseguimos utilizar comandos SQL sem utilizar a linguagem do MySQL para tal. Nesse projeto utilizamos o **Sequelize**.

<details>
 <summary>English translation</summary>
The ORMs or Object-Relational Mappers aims to lower the use of SQL querys on consulting the database. Making use of a framework based on ORM, we can use SQL commands without the MySQL language. In this project we used Sequelize.
</details>

---

## Sequelize

O **Sequelize** é um ORM baseado em **Promises** para Node.js e pode ser utilizado para diversos bancos de dados. Neste projeto, utilizamos em conjunto com o MySQL.

<details>
 <summary>English translation</summary>
Sequelize is an ORM based on Promises for Node.js and can be used for several database technologies. In this project, we used it with MySQL.
</details>

---

## POO (OOP)

A **Programação Orientada a Objetos** é um modelo de programação que organiza o design de software em torno de dados ou objetos, em vez de funções e lógica. Um objeto pode ser definido como um campo de dados que possui atributos e comportamento exclusivos.

<details>
 <summary>English translation</summary>
 Object-oriented Programming is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.
</details>

---

## SOLID

Na engenharia de software, **SOLID** é um acrônimo mnemônico para cinco princípios de projeto destinados a tornar os projetos orientados a objetos mais compreensíveis, flexíveis e de fácil manutenção. As cinco letras significam:

-   Single Responsability Principle (Princípio da Responsabilidade Única);
-   Open/Closed Principle (Princípio Aberto/Fechado);
-   Liskov Substitution Principle (Princípio da substituição de Liskov);
-   Interface Segregation Principle (Princípio da Segregação de Interface);
-   Dependency Inversion Principle (Princípio da Inversão de Dependência).

Para se aprofundar no significado de cada princípio, consulte este <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank">link</a>. Ou este outro <a href="https://pt.wikipedia.org/wiki/SOLID" target="_blank">link</a> para a versão em português.

<details>
 <summary>English translation</summary>
 In software engineering, SOLID is a mnemonic acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable. The meaning of each letter is listed right above. For more information on their meaning, visit the link immediately bellow the list.
</details>

---

## Funcionamento da aplicação (App's operation)

Para iniciar o projeto, é necessário ter instalado Git, Docker com Docker Compose e Node. Para que não ocorram erros, o ideal é que seu Docker Compose esteja na versão 1.29 e o Node na versão 16.

Antes de iniciar, entre na raiz do projeto pelo seu terminal e rode o comando `npm run compose:up` para criar e inicializar os containers da aplicação. Você pode acesssar o frontend da aplicação, uma vez que os containers estejam rodando, acessando `http://localhost:3000/`. Para logar e testar o funcionamento da aplicação, utilize um dos logins abaixo.

Administrador: `email: admin@admin.com | password: secret_admin`

Usuário comum: `email: user@user.com | password: secret_user`

<details>
 <summary>English translation</summary>
To start the project, you must have installed Git, Docker with Docker Compose and Node. So that errors do not occur, the ideal is that your Docker Compose is at version 1.29 and Node at version 16.

Before starting, enter the project root from your terminal and run the command `npm run compose:up` to create and initialize the application containers. You can access the application frontend, once the containers are running, by going to `http://localhost:3000/`. To log in and test the operation of the application, use one of the logins above.
</details>

---

## Cobertura de Testes (Tests Coverage)

Você pode verificar a cobertura de testes que eu desenvolvi para a aplicação rodando o comando `cd app/backend/ && npm install && npm run test:coverage` no seu terminal, a partir da raiz do projeto. Eventualmente pretendo cobrir 100% da aplicação, mas foi muito gratificante ter feito estes testes antes de programar, pude entender na prática o valor do TDD e porque é uma prática tão valorizada.

<details>
 <summary>English translation</summary>
You can check the test coverage I developed for the application by running the command `cd app/backend/ && npm install && npm run test:coverage` in your terminal, from the project root directory. Eventually I intend to cover 100% of the application, but it was very interesting and pleasing to do these tests before programming, I could understand the value of TDD and why it is such a valued practice by really doing it.
</details>

---

## Histórico de Commits (Commits history)

O histórico de commits está preservado da forma como o projeto foi desenvolvido, sendo possível visualizar o caminho que trilhei e como resolvi o problema proposto pelo projeto.

<details>
 <summary>English translation</summary>
The commit history is preserved the way the project was firstly developed, providing a way to visualize the path I chose to take and how I solved the problem given by the project.
</details>

---
