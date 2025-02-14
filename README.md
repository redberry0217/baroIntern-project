# 💙프로젝트 소개
* REST API를 통해 회원가입,로그인 등을 간단하게 체험해 볼 수 있는 프로젝트
* 작업 기간 : 2025.02.13(목) ~ 2.14(금) (2일간)

# 💙페이지 구성
* 메인 페이지
* 로그인 페이지 (/login)
* 회원가입 페이지 (/signIn)
* 마이페이지 (/myPage) - 로그인 필요, 비로그인 시 로그인 페이지로 리다이렉트

# 💙파일구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜profile.jpg
 ┣ 📂axios
 ┃ ┗ 📜baseInstance.ts
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜AuthLayout.tsx
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂Spacer
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂constants
 ┃ ┗ 📜queryKeys.ts
 ┣ 📂hooks
 ┃ ┣ 📂mutations
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂queries
 ┃ ┃ ┗ 📜common.ts
 ┃ ┗ 📜useRedirect.tsx
 ┣ 📂pages
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜MyPage.tsx
 ┃ ┗ 📜SignIn.tsx
 ┣ 📂services
 ┃ ┗ 📜index.ts
 ┣ 📂shared
 ┃ ┗ 📜Router.tsx
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜index.ts
 ┣ 📂zustand
 ┣ 📜App.tsx
 ┣ 📜global.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
