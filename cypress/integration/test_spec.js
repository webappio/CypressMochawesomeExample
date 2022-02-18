describe('Visit Home Page', () => {
  it('Loads hello world', () => {
    cy.visit('/')
    cy.contains('Hello World')

    expect(true).to.equal(false)
  })

  it('This tests passes', () => {
    cy.visit('/')

    expect(true).to.equal(true)
  })
})

describe('Another one', () => {
  it('Loads', () => {
    cy.visit('/')
    cy.contains('Hello World')

    expect(true).to.equal(false)
  })

  it('This tests passes', () => {
    cy.visit('/')

    expect(true).to.equal(true)
  })
})
