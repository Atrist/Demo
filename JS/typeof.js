function type(value) {
  if (typeof value !== "object") {
    return typeof value;
  }
  let result = Object.prototype.toString.call(value);
  result = result.split(" ")[1].split("");
  result.pop();
  return result.join("").toLocaleLowerCase();
}

console.log(type(123));
console.log(type({}));
console.log(type(String("123")));
console.log(type(/123/))
