describe('Parte 1' , () => { //ele não aperta o botão de login, está fora dessa página
  it('Visite a página de principal do AdoPet e clique no botão "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('.button');
})
});

describe('Atividade aula 1', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  });

  it('Visite a página de principal do AdoPet e teste os botões header', () => {
    cy.get('.header__home').click();
    cy.get('.header__home').click();
  });

  it('Visite a página de /login do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.get('input[name="email"]').type('saracachorro@gmail.com');
    cy.get('input[name="password"]').type('Sara123');
    cy.contains('button', 'Entrar').click();
  });

  it('Visite a página de /home do AdoPet e clique no botão "Falar com o responsável"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
  });
});

