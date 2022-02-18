describe('Is another test', () => {
  it('Loads hello world', () => {
    cy.visit('/')
    cy.contains('Hello World')

    expect(true).to.equal(true)
  })

  it('This tests fails', () => {
    cy.visit('/')

    expect(true).to.equal(false)
  })
})
