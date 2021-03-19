//  JSON.parse方法
const oldObj = {
  a: 1,
  b: ["e", "f", "g"],
  c: { h: { i: 2 } },
};

let newObj = JSON.parse(JSON.stringify(oldObj));
console.log("newObj: ", newObj);
// console.log("newObj.split(): ", newObj.split());
