describe('Página de cadastro', () => {
    it('Deve preencher os campos do formulário incorretamente e alertas sobre os campos obrigatórios ao usuário', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app')
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="input-email"]').type('sarita@cachorro.com')
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');  
    })
  })