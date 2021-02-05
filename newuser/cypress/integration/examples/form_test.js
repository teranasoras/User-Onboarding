
describe('form tests', () =>{
beforeEach(() => {
    cy.visit('http://localhost:3000')
})



const nameInput = () => cy.get('input[name="name"]');
const emailInput = () => cy.get('input[name="email"]');
const passwordInput = () => cy.get('input[name="password"]');
const submitButton = () => cy.get(`button[id="submitbutton"]`)
const termsBox = () => cy.get('input[name="terms"]')
it('making sure the user can type in the boxes', () =>{
    nameInput()
    .should('have.value', "")
    .type('testing')
    .should('have.value', 'testing')

    emailInput()
    .should('have.value', "")
    .type('hello@testing.com')
    .should('have.value', 'hello@testing.com')

    passwordInput()
    .should('have.value', "")
    .type('testing')
    .should('have.value', 'testing')
    
})


it('making sure the checkbox and buttons work', () =>{
    cy.contains(/TEXT INPUT/).should('not.exist')
    submitButton().should('be.disabled')
    nameInput().type('TEXT INPUT')
    submitButton().should('be.disabled')
    emailInput().type('me@me.com')
    submitButton().should('be.disabled')
    passwordInput().type('password')
    submitButton().should('be.disabled')
    termsBox().click()
    termsBox().should('be.checked')
    submitButton().should('not.be.disabled')
    submitButton().click()
    cy.contains(/TEXT INPUT/).should('exist')


    
})
it('checking that the form should not work if a feild is left empty', () =>{
    cy.contains(/TEXT INPUT/).should('not.exist')
    nameInput().type('TEXT INPUT')
    passwordInput().type('password')
    termsBox().click()
    termsBox().should('be.checked')
    submitButton().should('be.disabled')

})
})