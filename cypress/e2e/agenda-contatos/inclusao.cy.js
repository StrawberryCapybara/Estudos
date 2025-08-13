/// <refererence types="cypress" />

describe('deve testar a função adicionar', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Jorge Augusto') 
        cy.get('input[placeholder="E-mail"]').type('jorgeaugusto.ja@gmail.com')  
        cy.get('input[placeholder="Telefone"]').type('11938779129')  
        cy.get('.adicionar').click()
    })
})