/// <reference types="cypress" />

describe( "Ongs", () => {
    it("devem poder realizar um cadastro", () => {
        cy.visit('http://localhost:3000/register')
        cy.get('[data-cy=name]').type('João')
        cy.get('[data-cy=email]').type('joao@hotmail.com')
        cy.get('[data-cy=whatsapp]').type('(66)666666-6666')
        cy.get('[data-cy=city]').type('Belo Horizonte')
        cy.get('[data-cy=uf]').type('MG')


        /*
        routing
        start server com cy.server()
        criar uma rota com cy.route()
        atribuir rota a um alias
        esperar cy.wait
        */

        //cy.server()
        cy.route('POST', '**/ongs').as('postOng')

        cy.get('[data-cy=submit]').click()

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200)
            expect(xhr.response.body).has.property('id')
            expect(xhr.response.body.id).is.not.null
        })
    })

    it("deve poder realziar um login no sistema", () => {
        

        const createOngId = Cypress.env('createOngId')

        cy.log(createOngId)
        cy.visit('http://localhost:3000/')
        cy.get('input').type(createOngId)
        cy.get('.button').click()        
       


    })
})
