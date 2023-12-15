# USER CONTROL - SERVER
  Aplicação para controles de usuários, os mesmos podem ser cadastrados com cpf e nome:
  ```typeScript
  { cpf: string, name: string }
  ```
  O cpf esta sendo usado como chave primaria, não sendo possível assim cadastrar dois usuários com o mesmo cpf.
  A aplicação disponibilizar um **C.R.U.D**, mais detalhes na documentação abaixo.

## Execução do projeto
1. Certifique-se de ter instalado.
    - [Node.js](https://nodejs.org/en): versão usada para desenvolvimento deste projeto **v18.19.0**.
    - [Docker](https://docs.docker.com/get-docker/): versão usada para desenvolvimento deste projeto **v24.0.7**.
    - [Docker Compose](https://docs.docker.com/compose/install/): versão usada para desenvolvimento deste projeto **1.29.2**.

2. Clone este repositório:
    ```bash
    git clone git@github.com:maycon8609/user-control.git
    ```

3. Instale as dependências:
    ```bash
    cd server
    npm install
    ```

4. Para executar os testes:
    ```bash
    npm run test
    ```

5. Iniciar o projeto:
    ```bash
    npm run start:docker
    ```

6. Na primeira execução se faz necessário o seguinte script para subir as migration criando assim a tabela de usuários:
    ```bash
    npm run migration:up
    ```

7. Acesse a aplicação em http://localhost:3000.

8. Site para [gerar cpf](https://www.4devs.com.br/gerador_de_cpf) valido para testes.

## Rotas
**POST /user**
- Cria um novo usuário.
- Parâmetros:
    ```
    Body:
        cpf: CPF do usuário.
        name: Nome do usuário.
    ```
- Retorno:
    ```json
    {
        "cpf": "30506980049",
        "name": "user name",
        "created_at": "2023-12-13T13:17:28.849Z",
        "updated_at": "2023-12-13T13:17:28.849Z"
    }
    ```

**GET /user/:cpf**
- Busca um usuário pelo CPF.
- Parâmetros:
    ```
    Params:
        cpf: CPF do usuário.
    ```
- Retorno:
    ```json
    {
        "cpf": "30506980049",
        "name": "user name",
        "created_at": "2023-12-13T13:17:28.849Z",
        "updated_at": "2023-12-13T13:17:28.849Z"
    }
    ```

**GET /user**
- Busca todos os usuários.
- Retorno:
    ```json
    [{
        "cpf": "30506980049",
        "name": "user name",
        "created_at": "2023-12-13T13:17:28.849Z",
        "updated_at": "2023-12-13T13:17:28.849Z"
    }]
    ```

**PUT /user/:cpf**
- Atualiza um usuário pelo CPF.
- Parâmetros:
    ```
    Body:
        name: Novo nome do usuário.
    Params:
        cpf: CPF do usuário.
    ```
- Retorno:
    ```json
    {
        "cpf": "30506980049",
        "name": "new user name",
        "created_at": "2023-12-13T13:17:28.849Z",
        "updated_at": "2023-12-13T13:59:16.452Z"
    }
    ```

**DELETE /user/:cpf**
- Exclui um usuário pelo CPF.
- Parâmetros:
    ```
    Params:
        cpf: CPF do usuário.
    ```
- Retorno:
    ```json
    {
        "message": "User successfully deleted."
    }
    ```

# USER CONTROL - WEB
## Execução do projeto
2. Instale as dependências:
    ```bash
    cd web
    npm install
    ```

3. Iniciar o projeto:
    ```bash
    npm run dev
    ```

4. Acesse a aplicação em http://localhost:5173.