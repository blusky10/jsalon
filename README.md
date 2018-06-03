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
 - **순수 함수** (Pure Function)
   - 파라미터에 의해서만 반환값이 결정되는 함수
   - 하나 이상의 인자를 받고 인자가 같으면 항상 같은 값을 반환한다.
   - 순수함수는 인자나 함수 밖에 있는 다른 변수를 변경하거나 입출력을 수행해서는 안된다.

 - **일급 함수** (first class function)
   - 숫자를 변수에 저장하듯이 함수를 변수에 저장할 수 있다.
   - 숫자를 배열에 저장하듯이 함수를 배열에 저장할 수 있다.
   - 숫자를 객체에 저장하듯이 함수를 객체에 저장할 수 있다.
   - 언제든 숫자를 만들 수 있듯이 필요할 때 함수를 만들 수 있다.
   - 함수에 숫자를 전달 할 수 있듯이 함수에 함수를 전달 할 수 있다.
   - 함수가 숫자를 반환 할 수 있듯이 함수가 함수를 반환할 수 있다.

 - **고차원 함수** (high-order function)
   - 함수를 인자로 받는다.
   - 결과로 함수를 반환한다.

### 함수 호출 유형
JavaScript의 함수 호출 체계는 독특합니다. 호출 시점의 런타임 콘텍스트, 즉 함수 본체 내부의 `this` 값을 자유롭게 지정할 수 있으며 호출하는 방법도 다양합니다.
 - **전역 함수로 호출** : `this` 레퍼런스는 전역 객체, 또는 `undefined`(엄격모드)를 가리킵니다.
   ```js
   function doWork() {
     // this 레퍼런스는 전역 객체를 가리킵니다.
     this.myVar = 'Some Var';
   }

   doWork();
   ```
 - **메서드로 호출** : `this` 레퍼런스는 해당 메서드를 소유한 객체입니다.
   ```js
   var obj = {
     prop: 'Some Prop',
     getProp: function() {
       // 객체 메서드 호출 시 this는 소유 객체를 가리킵니다.
       return this.prop
     }
   };
   
   obj.getProp();
   ```
 - **앞에 `new`를 붙여 생성자로 호출** : 새로 만든 객체의 레퍼런스를 암시적으로 반환합니다.
   ```js
   function MyType(arg) {
     // 함수를 new로 호출할 경우 this가 가리키는 것은 방금 전 생성되어 암시적으로 반환된 객체입니다.
     this.prop = arg;
   }

   var someVal = new MyType('Some Arg');
   ```

<br>

## React
> In computing, React (sometimes React.js or ReactJS) is a JavaScript library for building user interfaces.

 - Learning
   - [누구든지 하는 React (Velopert)](https://velopert.com/3613)
 - Article
   - [23 Best React UI Component Frameworks](https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42)
   - [React 버전 16+ 총정리](https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-react-%EB%B2%84%EC%A0%84-16-%EC%B4%9D%EC%A0%95%EB%A6%AC)

### 순수 리액트
 - ReactDOM
   - 항상 한가지 엘리먼트만 DOM 으로 렌더링할수있다.
 - React Component
   - `React.createClass`

### JSX
 - 다른 컴포넌트의 Child 로 컴포넌트를 추가할 수 있다.
 - `class` 가 예약어이기 때문에 `className`을 사용한다.
 - `{}` 를 사용해서 javascript 를 표현 할 수 있다.

<br>

## Node & npm
> npm is the package manager for JavaScript and the world’s largest software registry.
 - [package.json과 package-lock.json의 혼재](https://medium.com/@pyeonjy97/package-json%EA%B3%BC-package-lock-json%EC%9D%98-%ED%98%BC%EC%9E%AC-83b80518c453)

### Babel
- 모든 브라우저에서 JSX 를 지원하지 않기 때문에 브라우저가 해석할 수 있는 코드로 변환을 해야 한다. (트랜스파일링)
- 바벨이 그역할을 한다.
- 간편하게 HTML에 `babel-standalone` 링크를 포함하면 되지만 프로덕션에서는 좋은 방법은 아님. 이럴 경우 클라이언트가 Script 안의 코드를 실행하기 전에 트랜스파일링을 수행한다.

### 웹팩
- 트랜스파일링
- 코드 분리
- 코드축소(minifying) : 공백, 줄바꿈, 긴 변수 이름, 불필요한 코드등을 없애서 파일 크기를 줄여준다.
- 틍징 켜고 끄기(feature flagging) : 코드의 기능을 테스트 해야 하는 경우 코드를 각각의 환경에 맞춰 보내준다. 
- HMR(Hot Module replacement) : 소스코드가 바뀌는지 감지해서 변경된 모듈만 반영한다. 

### 웹팩 설치
- -g 옵션을 주면 global 로 설치하며 옵션이 없을 경우 현재 디렉토리의 ./node_modules 에  설치 된다. 로컬 설치한 모듈만 require를 사용해 바로 읽어올 수 있다.
- 웹팩 global 설치 : npm install -g webpack
- preset 설치 : npm install babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 --save-dev
- React, ReactDOM 로컬 설치 : npm install react react-dom --save

### --save vs --save-dev
- --save : 설치한 패키지들이 dependencies 에 나타난다. 
- --save-dev : 설치한 패키지들이 devDependencies 에 나타난다. 
- --production 빌드시 dependencies 에 정의되어 있는 항목만 포함하게 된다. 

### 모듈 설치
- prop-types : npm install prop-types --save