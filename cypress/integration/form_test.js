describe('Pizza Testing', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const textInput = () => cy.get('input[name=name]')
    const topping1 = () => cy.get('input[name=topping1]')
    const topping2 = () => cy.get('input[name=topping2]')
    const topping3 = () => cy.get('input[name=topping3]')
    const submitButton = () => cy.get('button[id=order]')


    it('Type Name in Name input and check it', () => {
        textInput()
            .type('Vibhas')
            .should('have.value', 'Vibhas')
    })

    it('Check checkboxes', () => {
        topping1()
            .check()
            .should('be.checked')

        topping2()
            .check()
            .should('be.checked')

        topping3()
            .check()
            .should('be.checked')
    })


    it('Check to see if a user can submit valid data', () => {
        textInput().type('Tester')
        topping1()
            .check()
            topping2()
            .check()
            topping3()
            .check()
        submitButton().click()
        cy.contains('Tester').should('exist')

    })


})