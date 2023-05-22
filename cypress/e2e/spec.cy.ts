describe('서비스 시작', () => {
  it('메인 페이지 내 버튼 및 워딩 확인', () => {
    cy.visit('http://localhost:3000/')

    cy.get('button').click()

    cy.get('div').contains('Hello, World!')
  })
})
