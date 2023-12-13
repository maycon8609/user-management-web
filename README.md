# USER CONTROL - SERVER
  Descrição

## Execução do projeto
1. Certifique-se de ter instalado.
    - [Node.js](https://nodejs.org/en): versão usada para desenvolvimento deste projeto **v18.19.0**.
    - [Docker](https://docs.docker.com/get-docker/): versão usada para desenvolvimento deste projeto **v24.0.7**.
    - [Docker Compose](https://docs.docker.com/compose/install/): versão usada para desenvolvimento deste projeto **1.29.2**.

2. Clone este repositório.
    ```bash
    git clone git@github.com:maycon8609/user-control.git
    ```

3. Instale as dependências.
    ```bash
    cd sever
    npm install
    ```
4. Iniciar o projeto.
    ```bash
    npm run start:docker
    ```

5. Acesse a aplicação em http://localhost:3000.

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
        "id": "ce61d09d-4096-4407-b20b-ea3568c3342e",
        "name": "user name",
        "cpf": "30506980049",
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
        "id": "ce61d09d-4096-4407-b20b-ea3568c3342e",
        "name": "user name",
        "cpf": "30506980049",
        "created_at": "2023-12-13T13:17:28.849Z",
        "updated_at": "2023-12-13T13:17:28.849Z"
    }
    ```

**GET /user**
- Busca todos os usuários.
- Retorno:
    ```json
    [{
        "id": "ce61d09d-4096-4407-b20b-ea3568c3342e",
        "name": "user name",
        "cpf": "30506980049",
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
        "id": "ce61d09d-4096-4407-b20b-ea3568c3342e",
        "name": "new user name",
        "cpf": "30506980049",
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