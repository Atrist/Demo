/**
 *  使用 reduce 方法实现 forEach、map、filter
 */

// reduce  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// forEach

function forEachUseReduce(array, handler) {
  array.reduce(function (pre, item, index) {
    handler(item, index);
  }, 0);
}

forEachUseReduce([1, 2, 3, 4], (item) => console.log(item));

// map

function mapUseReduce(array, handler) {
  let result = [];

  array.reduce(function (pre, item, index) {
    let mapItem = handler(item, index);
    result.push(mapItem);
  }, 0);
  return result;
}

console.log(mapUseReduce([1, 2, 3, 4], (item) => item));

// filter

function filterUseReduce(array, handler) {
  let result = [];
  array.reduce(function (pre, item, index) {
    if (handler(item, index)) {
      result.push(item);
    }
  }, 0);
  return result;
}

console.log(filterUseReduce([1, 2, 3, 4], (item) => item > 5));
