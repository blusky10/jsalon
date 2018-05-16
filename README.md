# 정마담살롱 연구회
```js
const goal = 'Learning React!'
```

현재 보고계신 `Readme.md` 문서에서는 기술관련된 내용을 기술합니다.  
연구회 진행과 관련된 내용은 Wiki 문서를 참고하시면 됩니다.

## JavaScript
> JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.

 - Learning
   - [Wikibooks JavaScript](https://en.wikibooks.org/wiki/JavaScript)
   - [What is Javascript? (MDN)](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
   - [JavaScript 기초 (insanehong)](http://insanehong.kr/category/javascript/)

### 함수 구분
**순수 함수** (Pure Function)
 - 파라미터에 의해서만 반환값이 결정되는 함수
 - 하나 이상의 인자를 받고 인자가 같으면 항상 같은 값을 반환한다.
 - 순수함수는 인자나 함수 밖에 있는 다른 변수를 변경하거나 입출력을 수행해서는 안된다.

**일급 함수** (first class function)
 - 숫자를 변수에 저장하듯이 함수를 변수에 저장할 수 있다.
 - 숫자를 배열에 저장하듯이 함수를 배열에 저장할 수 있다.
 - 숫자를 객체에 저장하듯이 함수를 객체에 저장할 수 있다.
 - 언제든 숫자를 만들 수 있듯이 필요할 때 함수를 만들 수 있다.
 - 함수에 숫자를 전달 할 수 있듯이 함수에 함수를 전달 할 수 있다.
 - 함수가 숫자를 반환 할 수 있듯이 함수가 함수를 반환할 수 있다.

**고차원 함수** (high-order function)
 - 함수를 인자로 받는다.
 - 결과로 함수를 반환한다.

<br>

## React
> In computing, React (sometimes React.js or ReactJS) is a JavaScript library for building user interfaces.

 - Learning
   - [누구든지 하는 React (Velopert)](https://velopert.com/3613)
 - Article
   - [23 Best React UI Component Frameworks](https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42)
   - [React 버전 16+ 총정리](https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-react-%EB%B2%84%EC%A0%84-16-%EC%B4%9D%EC%A0%95%EB%A6%AC)

### 순수리액트
**ReactDOM**
 - 항상 한가지 엘리먼트만 DOM 으로 렌더링할수있다.

**React Component**
 - React.createClass

## JSX
- 다른 컴포넌트의 Child 로 컴포넌트를 추가할 수 있다.
- class 가 예약어 이기 때문에 className을 사용한다.
- {} 를 사용해서 javascript 를 표현 할 수 있다.

## 바벨
- 모든 브라우저에서 JSX 를 지원하지 않기 때문에 브라우저가 해석할 수 있는 코드로 변환을 해야 한다. (트랜스파일링)
- 바벨이 그역할을 한다.
- 간편하게 HTML에 babel-standalone링크를 포함하면 되지만 프로덕션에서는 좋은 방법은 아님. 이럴 경우 클라이언트가 Script 안의 코드를 실행하기 전에 트랜스파일링을 수행한다.