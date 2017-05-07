// /*==========================================================
// *   1. 비동기 처리
// ==========================================================*/
const promiseNum = (num) => new Promise(resolve => {
  setTimeout(() => {
    resolve(num);
  }, 1000);
});

// ES6에서의 처리법
const sum1 = () => {
  return promiseNum(10).then(first => {
    return promiseNum(20).then(second => {
      return first + second;
    });
  });
};

sum1().then(console.log);

// ES7에서의 처리법!!
const sum2 = async () => {
  const first = await promiseNum(10);
  const second = await promiseNum(20);
  return first + second;
};

sum2().then(console.log);





// /*==========================================================
// *   2. Generator
// ==========================================================*/
