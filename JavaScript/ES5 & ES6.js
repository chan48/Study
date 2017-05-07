/*==========================================================
*   1. 변수 선언
==========================================================*/
// ES5
// 모든 변수를 var로 선언함.
var a = 0;
var b = 10;

// ES6
// let과 const로 나누어서 선언함.
// 간단하게 생각해서 let은 수정이 가능하고 const는 수정이 불가능하다.
// 대신 object나 array등의 참조 값은 수정이 가능하다.
let c = 10;
c += 10;  // c = 20

const d = 5;
// d += 5;   // TypeError: Assignment to constant variable.





/*==========================================================
*   2. 화살표 함수 표현(Arrow function expression)
==========================================================*/
// ES5
var funcES5 = function() {
  return "Hello World!";
};

// ES6
// 항상 익명이며 this, arguments, super 또는 new.target을 바인딩 하지 않는다.
// 즉, 메소드가 아닌 함수에 적당하다.
const arrowFunc = () => {
  return "Hello World!";
};

// 매개변수가 하나이면 괄호의 생략이 가능하고, 바로 리턴 값이 나오면 중괄호의 생략 또한 가능하다.
const powArrow = (num) => {
  return num * num;
};
// 위 함수를 간단하게 표현하면 다음과 같이 된다.
const powArrowSimple = num => num * num;





/*==========================================================
*   3. 전개 연산자(spread operator) & 비구조화 할당(destructing assignment)
==========================================================*/
// ES5에서는 배열을 복사할 때, slice를 사용하지만 ES6에서는 전개 연산자를 사용할 수 있다.
const simpleArray = [1, 2, 3, 4, 5];
const coppiedArray = [...simpleArray];

// 전개 연산자를 이용해 다음과 같이 비구조화 할당을 할 수 있다.
const [one, , three] = simpleArray; // one = 1, three = 3

const simpleObject = { firstKey: 1, secondKey: 2 };
const { firstKey } = simpleObject;  // firstKey = 1





/*==========================================================
*   4. String과 변수의 조화 Template literals!
==========================================================*/
// ES5
var five = 5;
var ten = 10;
console.log('five plus ten is ' + (five + ten) + '.');

// ES6
console.log(`five plus ten is ${five + ten}.`);

// 심지어 Multi-line strings를 쓸 때에도
// ES5에서는 이렇게 쓰지만
console.log('Hello\nWorld');

// ES6에서는 이렇게 쓴다!
console.log(`Hello
World`);





/*==========================================================
*   5. Module을 import하는 방법
==========================================================*/
// ES5
var Router = require('react-router');
var Route = Router.Route;

// ES6
import { Route } from 'react-router';





/*==========================================================
*   6. 클래스(Class) 굳!
==========================================================*/
// ES5에서는 크게 functional, functional-shared, prototypal, pseudoclassical의
// 네 가지 방법으로 상속을 시킨다.
// http://callmenick.com/post/instantiation-patterns-in-javascript
function Box(length, width) {
  this.length = length;
  this.width = width;
}

Box.prototype.calculateArea = function() {
  return this.length * this.width;
}

var box = new Box(2, 2);
box.calculateArea(); // 4

// ES6에서는 그냥 클래스로 끝내버리기~
class Box {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    return this.length * this.width;
  }
}

let box = new Box(2, 2);
box.calculateArea(); // 4


// 클래스의 확장
// ES5
var MyComponent = React.createClass({
  // ...
});

// ES6
class MyComponent extends React.Component {
  // ...
}
