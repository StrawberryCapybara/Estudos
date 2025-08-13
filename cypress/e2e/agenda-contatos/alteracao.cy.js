/// <refererence types="cypress" />

describe('deve testar a função adicionar', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear().type('Jorge Augusto Silva')
        cy.get('.alterar').click()
    })
})