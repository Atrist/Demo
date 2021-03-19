// 函数 防抖

function debounce(fn, wait) {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    // 如果此时存在定时器的话, 则取消之前的定时器重新计时
    if (timer) {
      clearTimeout(timer);
    }
    // 设置定时器
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 函数节流

function throttle(fn, dev) {
  let preTime = Date.now();
  return function () {
    let context = this,
      args = arguments;
    let nowTime = Date.now();
    // 如果两次间隔时间超过了指定时间, 则执行函数
    if (nowTime - preTime > dev) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
