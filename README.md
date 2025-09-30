# My Project

Vue.js 기반의 웹 애플리케이션 프로젝트입니다.

## 📋 프로젝트 개요

이 프로젝트는 Vue.js 2.x를 기반으로 한 모던 웹 애플리케이션입니다. Vue Router를 사용한 SPA(Single Page Application) 구조로 되어있으며, Webpack을 통한 모듈 번들링과 개발 환경을 제공합니다.

## 🛠 기술 스택

- **프론트엔드**: Vue.js 2.5.2
- **라우터**: Vue Router 3.0.1
- **HTTP 클라이언트**: Axios 0.21.1
- **UI 프레임워크**: Bootstrap 3.4.1
- **페이지네이션**: Vuejs-paginate 2.1.0
- **빌드 도구**: Webpack
- **테스팅**: Jest (Unit Test), Nightwatch (E2E Test)
- **코드 품질**: ESLint

## 🚀 시작하기

### 필요 조건

- Node.js (권장 버전: 14.x 이상)
- npm 또는 yarn

### 설치

1. 저장소를 클론합니다:

```bash
git clone <repository-url>
cd my-project
```

2. 의존성을 설치합니다:

```bash
npm install
```

### 개발 환경 실행

개발 서버를 시작합니다:

```bash
npm run dev
```

또는

```bash
npm start
```

개발 서버가 실행되면 브라우저에서 `http://localhost:8080`으로 접속할 수 있습니다.

## 📝 스크립트 명령어

| 명령어          | 설명                          |
| --------------- | ----------------------------- |
| `npm run dev`   | 개발 서버 시작                |
| `npm start`     | 개발 서버 시작 (dev와 동일)   |
| `npm run build` | 프로덕션 빌드                 |
| `npm run test`  | 전체 테스트 실행 (Unit + E2E) |
| `npm run unit`  | 단위 테스트 실행              |
| `npm run e2e`   | E2E 테스트 실행               |
| `npm run lint`  | 코드 린팅 검사                |

## 📁 프로젝트 구조

```
my-project/
├── build/                 # 빌드 설정 파일들
├── config/                # 환경별 설정 파일들
├── src/                   # 소스 코드
│   ├── components/        # Vue 컴포넌트들
│   ├── router/           # 라우터 설정
│   ├── assets/           # 정적 자원 (이미지, 폰트 등)
│   ├── App.vue           # 메인 App 컴포넌트
│   └── main.js           # 애플리케이션 진입점
├── static/               # 정적 파일들
├── test/                 # 테스트 파일들
│   ├── unit/            # 단위 테스트
│   └── e2e/             # E2E 테스트
├── index.html           # HTML 템플릿
└── package.json         # 프로젝트 설정 및 의존성
```

## 🧪 테스트

### 단위 테스트

Jest를 사용한 단위 테스트를 실행합니다:

```bash
npm run unit
```

### E2E 테스트

Nightwatch를 사용한 E2E 테스트를 실행합니다:

```bash
npm run e2e
```

### 전체 테스트

단위 테스트와 E2E 테스트를 모두 실행합니다:

```bash
npm test
```

## 🔧 빌드

프로덕션용 빌드를 생성합니다:

```bash
npm run build
```

빌드된 파일들은 `dist/` 폴더에 생성됩니다.

## 📖 주요 컴포넌트

- **App.vue**: 메인 애플리케이션 컴포넌트
- **HelloWorld.vue**: 기본 예제 컴포넌트
- **Main.vue**: 메인 페이지 컴포넌트
- **About.vue**: 소개 페이지 컴포넌트
- **AppAxiosTest.vue**: Axios 테스트 컴포넌트

## 🌐 라우터 설정

Vue Router를 사용하여 SPA 라우팅을 구현했습니다. 라우터 설정은 `src/router/index.js`에서 관리됩니다.

## 🔍 코드 품질

ESLint를 사용하여 코드 품질을 관리합니다:

```bash
npm run lint
```
