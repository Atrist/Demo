function objectFactory() {
  let newObject = null;
  const constructor = Array.prototype.shift.call(arguments);
  let result = null;

  // 参数判断
  if (typeof constructor !== "function") {
    console.error("type error ");
    return;
  }
  // 新建一个空对象  对象的原型为构建函数的 prototype 对象
  result = constructor.apply(newObject, arguments);
  // 判断 返回对象
  let flag =
    result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}

