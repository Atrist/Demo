let array = [1, 2, 3];

array.reduce((pre, now) => {
  console.log("pre", pre);
  console.log("now", now);
  return pre
});


array.reduce((pre, now) => {
  console.log("pre", pre);
  console.log("now", now);
  return pre
},2);