/// <refererence types="cypress" />

describe('deve testar a função adicionar', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(6) > .sc-gueYoa > .delete').click()
    })
})