
describe('Página de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'htpps://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode:401}).as('stubPost')
    });
  
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
      cy.get('[data-test="input-loginEmail"]').type('sarita@cachorro.com');
      cy.get('[data-test="input-loginPassword"]').type('Fofa123');
      cy.get('[data-test="submit-button"]').click();
    });
  
    it('Falha no login do sistema', () => {
      cy.get('[data-test="input-loginEmail"]').type('sarita@');
      cy.get('[data-test="input-loginPassword"]').type('00');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
      cy.login('sarita@cachorro.com', 'Senha123')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })
  });
  
  
