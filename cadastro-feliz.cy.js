describe ('Página de cadastro', () => {
      it('Deve preencher os campos do formulário corretamente e submeter cadastro', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app')
      cy.contains('a', 'Cadastrar').click();
      cy.get('input[name="nome"]').type('Saracura Maria')
      cy.get('input[name="email"]').type('sarita@cachorro.com')
      cy.get('input[name="password"]').type('Fofa123')
      cy.get('input[name="confirm_password"]').type('Fofa123')
      cy.contains('button', 'Cadastrar').click();
      })
    });    