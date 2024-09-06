# Roteiro de Testes - AdoPet

## 1. Cadastro de Usuário
### Passos:
1. O usuário acessa a página de cadastro.
2. O usuário preenche o campo "Nome".
3. O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
4. O usuário preenche o campo "Senha" com uma senha válida.
5. O usuário preenche o campo "Confirmação de Senha" com a mesma senha.
6. O usuário clica no botão "Cadastrar".

### Resultados Esperados:
- O sistema valida os campos e cadastra o usuário com sucesso.

---

## 2. Login de Usuário
### Passos:
1. O usuário acessa a página de login.
2. O usuário preenche o campo "E-mail" com um e-mail válido.
3. O usuário preenche o campo "Senha" com a senha cadastrada.
4. O usuário clica no botão "Entrar".

### Resultados Esperados:
- O sistema valida as credenciais e redireciona o usuário para a página principal.

---

## 3. Selecionar o Pet Dunga
### Passos:
1. O usuário, após logado, acessa a página de pets disponíveis para adoção.
2. O usuário visualiza a lista de pets.
3. O usuário clica na imagem ou nome do pet "Dunga" para visualizar mais detalhes.

### Resultados Esperados:
- A página de detalhes do pet "Dunga" é carregada com sucesso.

---

## 4. Escrever Dados da Mensagem
### Passos:
1. Na página de detalhes do pet "Dunga", o usuário localiza o campo de mensagem.
2. O usuário escreve uma mensagem de interesse para o adotante do pet.
    - Exemplo de mensagem: "Olá, estou interessado em adotar o Dunga. Gostaria de saber mais sobre o processo de adoção."

### Resultados Esperados:
- O campo de mensagem aceita o texto e permite o envio da mensagem.

---

## 5. Enviar Mensagem ao Adotante
### Passos:
1. O usuário clica no botão "Enviar Mensagem".
2. O sistema processa o envio da mensagem e exibe uma confirmação.

### Resultados Esperados:
- A mensagem é enviada com sucesso ao adotante.
- Uma notificação de sucesso é exibida ao usuário confirmando o envio.
