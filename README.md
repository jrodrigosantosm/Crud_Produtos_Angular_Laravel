### Descrição do Desafio: CRUD de Produto com Angular, TypeScript, Laravel e PostgreSQL


Neste desafio, você será responsável por desenvolver um aplicativo de CRUD (Create,
Read, Update, Delete) de produtos, utilizando uma arquitetura desacoplada entre o
frontend e o backend. O frontend será desenvolvido em Angular, utilizando TypeScript
como linguagem de programação, enquanto o backend será desenvolvido em PHP
Laravel. O banco de dados utilizado será o PostgreSQL.


## Requisitos do CRUD de Produto:


1. O aplicativo deverá permitir a criação, leitura, atualização e exclusão de produtos.


2. Os campos do produto são os seguintes:


● Nome do Produto: uma string que representa o nome do produto.


● Categoria: uma chave estrangeira que referencia a categoria à qual o produto
pertence.


● Valor do Produto: um número de ponto flutuante que representa o valor monetário
do produto.


● Data de Vencimento: uma data que indica a data limite de validade do produto.


● Quantidade em Estoque: um número inteiro que representa a quantidade
disponível em estoque.


● Produto Perecível: um valor booleano que indica se o produto é perecível ou não.


3. O frontend deverá apresentar uma interface amigável ao usuário, permitindo que ele
visualize, crie, edite e exclua produtos. Será necessário criar formulários para a criação e
edição de produtos, além de exibir a lista de produtos existentes.


4. O backend deverá fornecer uma API RESTful para o frontend se comunicar. Será
necessário implementar rotas para criar, ler, atualizar e excluir produtos no banco de
dados PostgreSQL.


5. O banco de dados PostgreSQL será responsável pelo armazenamento persistente dos
produtos. Será necessário criar uma estrutura de tabelas que representam os campos
mencionados acima, bem como estabelecer relacionamentos entre as tabelas, como a
relação entre produto e categoria.


## Sugestões adicionais:

● Considere implementar validações nos formulários para garantir a integridade dos
dados, como a verificação de campos obrigatórios e restrições de tipos.


● Utilize boas práticas de codificação, seguindo os padrões estabelecidos pela
comunidade Angular, TypeScript e Laravel.


● Você pode utilizar bibliotecas e frameworks adicionais para facilitar o
desenvolvimento, desde que sejam compatíveis com a pilha de tecnologias
escolhidas.


● Lembre-se de documentar seu código e fornecer instruções claras sobre como
executar a aplicação.
Como entregar:


● Publicar o projeto no github com a seguinte estrutura de pastas:
○ backend
○ db
○ frontend
○ README
