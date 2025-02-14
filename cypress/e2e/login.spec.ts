describe("로그인 요청 시 토큰 저장 테스트", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("로그인 성공 시 localStorage에 accessToken이 저장되어야 합니다.", () => {
    cy.get("input[placeholder='아이디']").type("testUser");
    cy.get("input[placeholder='비밀번호']").type("testPassword");

    cy.get("button[type='submit']").click();

    cy.window().then((window) => {
      const token = window.localStorage.getItem("accessToken");
      assert.exists(token, "accessToken이 localStorage에 존재해야 합니다.");
    });
  });
});
