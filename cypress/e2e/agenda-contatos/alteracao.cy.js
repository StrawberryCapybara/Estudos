/// <refererence types="cypress" />

describe('deve testar a função editar', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear().type('Jorge Augusto Silva')
        cy.get('.alterar').click()
    })
})