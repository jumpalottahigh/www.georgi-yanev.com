describe('app', () => {
  it('works', () => {
    cy.visit('/')
      .getByText(/about/i)
      .click()
      .getByText(/{ Hi }/i)
  })
})
