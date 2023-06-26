describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:5173');
  });
  
  it('用户登录', () => {
    // 查找 <h1> 标签，检查文本内容是否包含“登录”
    cy.get('h1').should('contain.text', '登录');
    
    // 查找 <input> 标签，将 wuzhenquan 输入到输入框中
    cy.get('input').type('wuzhenquan');

    // 查找 <button> 标签，单击它
    cy.get('button').click();

    // 查找 <h1> 标签，检查文本内容是否包含“登录成功”
    cy.get('h1').should('contain.text', '登录成功');
  })
})