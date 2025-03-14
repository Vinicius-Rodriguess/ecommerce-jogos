# 🛒 **Back-End para Loja de E-commerce**

Este projeto é a API back-end para um sistema de e-commerce. Desenvolvido com **NestJS** e **TypeScript**, ele fornece endpoints seguros e escaláveis para gerenciar produtos, pedidos e usuários.

---

## 🚀 **Funcionalidades**

### **Back-End**
- API REST estruturada para gerenciar produtos, pedidos e usuários.
- Integração com banco de dados via **TypeORM**.
- Autenticação e autorização com **JWT** e **AuthGuard**.
- Segurança aprimorada com **bcrypt** para hash de senhas.
- Suporte para CRUD de produtos e gerenciamento de carrinho de compras.
- Validações robustas e tratamento de erros.

---

## 🛠️ **Tecnologias Utilizadas**

- **NestJS**: Framework TypeScript para desenvolvimento escalável.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **TypeORM**: ORM para interagir com o banco de dados.
- **PostgreSQL/MySQL**: Banco de dados relacional para armazenamento de informações.
- **JWT (JSON Web Token)**: Autenticação segura.
- **AuthGuard e Passport**: Mecanismo de proteção de rotas.
- **Bcrypt**: Hash de senhas para maior segurança.

---

## 🔧 **Como o Sistema Funciona**

1. **Cadastro/Login de Usuários**: Os usuários podem se registrar e autenticar via JWT.
2. **Gerenciamento de Produtos**: Endpoints para criação, atualização, exclusão e listagem de produtos.
3. **Carrinho de Compras**: Adicionar e remover produtos do carrinho.
4. **Pedidos**: Criar pedidos a partir dos itens no carrinho e gerenciar status.
5. **Segurança**: As senhas são protegidas com **bcrypt**, e a autenticação utiliza **JWT** com **AuthGuard** para controle de acesso.
6. **Persistência de Dados**: Todas as informações são armazenadas no banco de dados.

---

## 📋 **Requisitos**

- **Node.js** (v14 ou superior).
- **Banco de dados** (PostgreSQL ou MySQL).

---

## 🔧 **Como Configurar o Projeto**

1. Clone este repositório:
   ```bash
   git clone https://github.com/Vinicius-Rodriguess/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Execute as migrações do banco de dados:
   ```bash
   npm run typeorm migration:run
   ```

5. Inicie o servidor:
   ```bash
   npm run start
   ```

---

## 🖥️ **Exemplo de Uso**

1. **Autenticação**: Envie um POST para `/auth/login` com email e senha.
2. **Gerenciamento de Produtos**: Utilize os endpoints `/products` para criar, listar e excluir produtos.
3. **Carrinho**: Adicione produtos ao carrinho usando `/cart`.
4. **Pedidos**: Finalize um pedido com os produtos do carrinho via `/orders`.
5. **Proteção de Rotas**: Algumas rotas exigem um token JWT válido no cabeçalho Authorization.

---

## 📌 **Limitações**

- Requer configuração de banco de dados.
- O servidor deve estar rodando para o funcionamento da API.

---

## ✅ **Melhorias Futuras**

- Implementação de pagamentos online.
- Painel de administração para gerenciamento dos pedidos e usuários.
- Melhorias na segurança e proteção contra ataques comuns.

---

## 👨‍💻 **Autor**

**Vinicius Rodrigues**

- GitHub: [SeuUsuario](https://github.com/Vinicius-Rodriguess)
- Email: rodrigues.vini.2004@gmail.com
