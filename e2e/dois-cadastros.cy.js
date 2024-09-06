

describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  });

  it('Deve preencher os campos do formulário corretamente e cadastrar o usuário', () => {
    cy.get('[data-test="input-name"]').type('Saracura Maria');
    cy.get('[data-test="input-email"]').type('sarita@cachorro.com');
    cy.get('[data-test="input-password"]').type('Fofa123');
    cy.get('[data-test="input-confirm-password"]').type('Fofa123');
    cy.get('[data-test="submit-button"]').click();
  });

  it('Deve preencher os campos do formulário incorretamente e alertas sobre os campos obrigatórios ao usuário', () => {
    cy.get('[data-test="input-email"]').type('sarita@cachorro.com');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  });
});

