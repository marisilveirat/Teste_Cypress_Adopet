describe('Fazer login corretamente', () => {
    it('Deve fazer o login de forma correta', () => {
        it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.get('[data-test="login-button"]').click();
            cy.get('[data-test="input-loginEmail"]').type('sarita@cachorro.com');
            cy.get('[data-test="input-loginPassword"]').type('Fofa123');
            cy.get('[data-test="submit-button"]').click();
    });
});
    it('Deve selecionar um dos animais e clicar no botão "Falar com responsável"', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/home');
      cy.get('.cards').should('be.visible');
      cy.get(':nth-child(1) > .card__contact').click();
    });
});