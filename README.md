# AdoPet

AdoPet é uma plataforma de adoção de animais que facilita a conexão entre adotantes e pets disponíveis para adoção. A aplicação permite o cadastro de usuários, login, visualização de pets, e comunicação com responsáveis pelos animais.

## Funcionalidades

- **Cadastro de Usuário**: Permite o registro de novos usuários com informações como nome, e-mail e senha.
- **Login**: Usuários podem acessar a plataforma utilizando suas credenciais.
- **Selecionar Pets**: Usuários podem visualizar e selecionar pets disponíveis para adoção.
- **Enviar Mensagens**: Comunicação direta com responsáveis pelos pets através de mensagens.

## Roteiro de Testes

1. **Cadastro**
   - Acesse a página de cadastro.
   - Preencha os campos obrigatórios: Nome, E-mail, Senha e Confirmação de Senha.
   - Clique no botão "Cadastrar".
   - Verifique se o sistema processa as informações corretamente.

2. **Login**
   - Acesse a página de login.
   - Entre com e-mail e senha válidos.
   - Verifique se o login é bem-sucedido e o usuário é direcionado à página principal.

3. **Selecionar Pet**
   - Acesse a página principal.
   - Clique no botão “Ver pets disponíveis para adoção”.
   - Selecione um pet específico (por exemplo, Dunga).
   - Verifique os detalhes do pet selecionado.

4. **Enviar Mensagem**
   - Acesse a página de detalhes do pet.
   - Preencha os dados necessários na seção de mensagens.
   - Envie a mensagem ao responsável pelo pet.
   - Verifique se a mensagem foi enviada com sucesso.

## Cenários de Teste

1. **Cenário Feliz**: Todos os testes devem funcionar como esperado, com o sistema processando o cadastro, login, seleção de pets, e envio de mensagens corretamente.

2. **Cenário Triste**:
   - Cadastro com campos obrigatórios vazios deve exibir mensagens de erro apropriadas.
   - Login com credenciais inválidas deve mostrar uma mensagem de erro indicando falha no login.

## Tecnologias Utilizadas

- **Cypress**: Para a automação dos testes de integração e funcionalidade da plataforma.

## Como Executar os Testes

1. Certifique-se de que o Cypress está instalado.
2. Navegue até o diretório do projeto.
3. Execute os testes com o comando:

   ```bash
   npx cypress run
