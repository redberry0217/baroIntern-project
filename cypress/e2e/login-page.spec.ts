describe("로그인 페이지", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("로그인 페이지가 올바르게 렌더링되어야 합니다.", () => {
    cy.contains("로그인").should("be.visible");

    cy.get("input[placeholder='아이디']").should("be.visible");
    cy.get("input[placeholder='비밀번호']").should("be.visible");

    cy.get("button[type='submit']").contains("로그인").should("be.visible");

    cy.get("a").contains("회원가입").should("be.visible");
  });

  it("아이디와 비밀번호가 둘다 입력되었을 때 로그인 버튼이 활성화되어야 합니다.", () => {
    cy.get("input[placeholder='아이디']").type("testUser");
    cy.get("input[placeholder='비밀번호']").type("testPassword");

    cy.get("button[type='submit']").should("not.be.disabled");
  });

  it("아이디와 비밀번호가 하나라도 입력되지 않았을 때 경고 알림이 표시되어야 합니다.", () => {
    cy.get("input[placeholder='아이디']").type("testUser");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("아이디와 비밀번호를 모두 입력해주세요.");
    });
  });
});
