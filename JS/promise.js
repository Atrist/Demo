const promise = new Promise((res, rej) => {
  console.log(1);
  res(1);
  console.log(2);
});

promise.then(() => {
  console.log(3);
});
console.log(4);
