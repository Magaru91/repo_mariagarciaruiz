describe('TodoMVC - React', () => {

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  it('Crear tarea', () => {
    cy.get('.new-todo').type('Comprar pan{enter}')

    cy.get('.todo-list li')
      .should('have.length', 1)
      .and('contain', 'Comprar pan')
  })

  it('Marcar tarea como completada', () => {
    cy.get('.new-todo').type('Estudiar Cypress{enter}')

    cy.get('.todo-list li .toggle').click()

    cy.get('.todo-list li')
      .should('have.class', 'completed')
  })

  it('Desmarcar tarea completada', () => {
    cy.get('.new-todo').type('Repasar QA{enter}')

    cy.get('.todo-list li .toggle').click()

    cy.get('.todo-list li')
      .should('have.class', 'completed')

    cy.get('.todo-list li .toggle').click()

    cy.get('.todo-list li')
      .should('not.have.class', 'completed')
  })

it('Editar tarea', () => {
  cy.get('.new-todo').type('Tarea antigua{enter}')

  cy.contains('.todo-list li label', 'Tarea antigua')
    .should('be.visible')
    .dblclick({ force: true })

  cy.get('.todo-list li')
    .last()
    .find('input')
    .should('be.visible')
    .type('{selectall}Tarea editada{enter}', { force: true })

  cy.contains('.todo-list li label', 'Tarea editada')
    .should('be.visible')
})

  it('Borrar tarea', () => {
    cy.get('.new-todo').type('Tarea para borrar{enter}')

    cy.get('.todo-list li')
      .should('have.length', 1)

    cy.get('.todo-list li').trigger('mouseover')
    cy.get('.todo-list li .destroy').click({ force: true })

    cy.get('.todo-list li')
      .should('have.length', 0)
  })

  it('Filtrar tareas', () => {
  cy.get('.new-todo').type('Tarea activa{enter}')
  cy.get('.new-todo').type('Tarea completada{enter}')

  cy.contains('.todo-list li', 'Tarea completada')
    .find('.toggle')
    .click()

  cy.contains('a', 'Completed').click()

  cy.get('.todo-list li')
    .should('have.length', 1)

  cy.contains('.todo-list li', 'Tarea completada')
    .should('be.visible')

  cy.contains('.todo-list li', 'Tarea activa')
    .should('not.exist')

  cy.contains('a', 'Active').click()

  cy.get('.todo-list li')
    .should('have.length', 1)

  cy.contains('.todo-list li', 'Tarea activa')
    .should('be.visible')

  cy.contains('.todo-list li', 'Tarea completada')
    .should('not.exist')

  cy.contains('a', 'All').click()

  cy.get('.todo-list li')
    .should('have.length', 2)

  cy.contains('.todo-list li', 'Tarea activa')
    .should('be.visible')

  cy.contains('.todo-list li', 'Tarea completada')
    .should('be.visible')
})

})