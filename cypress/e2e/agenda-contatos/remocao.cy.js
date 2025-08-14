/// <refererence types="cypress" />

describe('deve testar a função remover', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get(':nth-child(6) > .sc-gueYoa > .delete').click()
    })
})